const express = require('express')
const fs = require('fs')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const mensajes = []
const productos = []

io.on('connection', (socket) => {
    socket.emit('productos', productos)
    socket.on('update', producto => {
        productos.push(producto)
        io.sockets.emit('productos', productos)
    })

    socket.emit('mensajesActualizados', mensajes)

    socket.on('nuevoMensaje', mensaje => {
        mensaje.fecha = new Date().toLocaleString()
        mensajes.push(mensaje)
        await fs.promises.writeFile('mensajes.txt', JSON.stringify(mensajes), 'utf-8')
        io.sockets.emit('mensajesActualizados', mensajes)
    })
})

const server = httpServer.listen(8080, () => {
    console.log(`servidor conectado en puerto ${server.address().port}`)
})