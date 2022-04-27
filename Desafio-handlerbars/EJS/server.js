const express = require('express');
const exphbs = require('express-handlebars');

const app = express()


const handlebarsConfig = {
    
    defaultLayout: 'default.handlebars'
}

app.engine('handlebars', exphbs.engine(handlebarsConfig))

app.set('view engine', 'handlebars')

app.set('views', './views')

app.use(express.urlencoded({ extended: true }))

//----------------------------------------------------------\\

const productos = [];

app.get('/', (req, res) => {
    res.redirect('/cargaProductos')
})

app.get('/cargaProductos', (req, res) => {
    res.render('formularioProductos')
})

app.post('api/productos', (req, res) => {
    const produ = req.body
    productos.push(prod)
    console.log(prod)
    res.redirect('/')
})


app.get('/vistaProductos', (req, res) => {
    const hayProductos = (productos.length > 0)
    res.render('vistaProductos', { hayProductos, productos  })
})

app.listen(8080, () => {
    console.log('contectado');
});