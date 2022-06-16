import { Router } from 'express'
import  usuariosController  from './usuariosController.js'

export const usuariosRouter = Router()


usuariosRouter.post('/api/usuarios', usuariosController.post)

usuariosRouter.get('/api/usuarios', usuariosController.get)