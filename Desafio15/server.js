//librerias
import express from 'express'
import 'dotenv/config'
import compression from 'compression'
import fork from 'child_process'

import { sessionHandler as session } from './middlewares/session.js'
import { passportMiddleware, passportSessionHandler } from './middlewares/passport.js'

//routers
import { usuariosRouter } from './routers/usuariosRouter.js'
import { authRouter } from './routers/authRouter.js'
import { datosRouter } from './routers/datosRouter.js'
import { infoRouter } from './routers/infoRouter.js'
import { childRouter } from './routers/childRouter.js'


const app = express()


// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session)
app.use(passportMiddleware)
app.use(passportSessionHandler)


// rutas
app.use('/api/usuarios', usuariosRouter)
app.use('/auth', authRouter)
app.use('/api/datos', datosRouter)
app.use('/info', infoRouter, childRouter)
app.use('/infozip', infoRouter, childRouter, compression)



// puerto
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en puerto ${server.address().port}`)
})