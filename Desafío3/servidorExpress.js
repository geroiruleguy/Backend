const express = require('express');

const app = express();

const fs = require('fs');

const Contenedor = require('../Desafío2/manejoArchivos');

const productos = new Container('productos');



app.get('/productos', async (req, res) => {
    const getAll = await productos.getAll()
    res.send(getAll);
    console.log(getAll);
 });

app.get('/productoRandom', async (req, res) => {
    const getAll = await productos.getAll()
    const randomFunction = Math.floor(Math.random() * productos.length - 1)
    const productoRandom = getAll[randomFunction]
    res.send(productoRandom)
    console.log(productoRandom);
 });

// ----------------- Server ---------------------------- \\
const PORT = 8080

const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`)) // --> manejador de errores