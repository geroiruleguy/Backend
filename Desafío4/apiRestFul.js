const {Router} = require('express')


const productos = Router()
const arrProductos = []

productos.get('/', (req, res) => {
    res.json(productos)
})

productos.get('/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    buscarProd = arrProductos[id - 1]
    if(!buscarProd){
        buscarProd = {error: 'producto no existente'}
    }
    res.json(buscarProd)
})

productos.post('/', (req, res) => {
    if (!arrProductos.length) {
        arrProductos.id = 1
    } else {
        arrProductos.id = arrProductos.length + 1
    } 
    arrProductos.push(req.body)
    console.log(`Id: ${arrProductos.id}`)
    res.json(arrProductos)
})

productos.put('/:id', (req, res) =>{
    const agregarProducto = req.body
    const id = parseInt(req.params.id)
    arrProductos[id - 1] = agregarProducto
    res.json(proarrProductosductos[id - 1])
})

productos.delete('/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    const eliminarProducto = arrProductos.splice(id - 1, 1)
    res.json({eliminado: eliminarProducto})
})


module.exports = productos;