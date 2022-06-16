import express from 'express'
import session from 'express-session' //lo usamos para el login, 
                                    //para guardar las sesiones del usuario en algun lado
import { usuariosRouter } from './usuariosRouter.js'
import { authRouter } from './authRouter.js'
import { crearErrorAutenticacion } from './errores.js'

function rutaProtegida(req, res, next) {
    if (!req.session.username) { //si no existe este nombre de usuario, significa que no estoy autenticado, por tanto te tiro error 
        next(crearErrorAutenticacion())
    } else {
        next()
    }
}

const app = express()

app.use(express.json()) // middleware para enviar cosas desde el cliente (para recibir cosas)

app.use(session({
    secret: 'blabla',
    resave: false,
    saveUninitialized: false, // si la session esta vacia no se guarda
}))

app.get('/', (_, res) => {
    res.send('ok')
})

app.use(usuariosRouter)
app.use(authRouter)

app.get('/privado', rutaProtegida, (req,res) => { //hace efectivamente la autenticacion. Esto es publico solo si el user se autentico
    res.json({ msj: req.session.mensajeBienvenida })
})

app.use((error, req, res, next) => {
    switch (error.tipo) {
        case 'FALTAN_DATOS':
            res.status(400)
            break
        case 'AUTH_ERROR':  
            res.status(401)
            break
        case 'NOT_FOUND':  
            res.status(404)
            break      
        default:    
            res.status(500)    
    }
    res.json({ msj: error.message })
})

const server = app.listen(8080, () => {
    console.log(`escuchando en el puerto ${server.address().port}`)
})
