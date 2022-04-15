const express = require('express')
const productos = require('./Productos')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use('/api/productos', productos)
app.use(express.static('public'))

const PORT = 8080
const server = app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en el servidor ${error}`))