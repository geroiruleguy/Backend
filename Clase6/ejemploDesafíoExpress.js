const express = require('express');

const app = express()

let contadorVisitas = 1

app.get('/', (req, res) => {
    res.send(`
    <h1>Desafío Express en clase</h1> <br>
    <p> esto es un texto </p>
    <a href = "/visitas"> visitas</a>
    `)
 });

app.get('/visitas', (req, res) => {
    const palabraFinal = contadorVisitas === 1 ? 'vez' : 'veces'
    res.send(`sitio visitado ${contadorVisitas++} ${palabraFinal}`)
 });

app.get('/fyh', (req, res) => {
    const fecha = new Date()
    // const fechaString = fecha.toLocaleDateString() 
    // const fechaString = fecha.toLocaleTimeString()
    const fechaString = fecha.toLocaleString()  
    res.send({
        fyh : fechaString
    })
 });



const PORT = 8080

const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`)) // --> manejador de errores
