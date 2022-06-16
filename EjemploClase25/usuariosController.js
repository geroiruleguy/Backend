import usuariosPersistencia from './usuariosPersistencia.js'
import { crearUsusario } from './usuariosModel.js'

export default { 
    post: async (req, res, next) => {
        try {
            const datosUsuario = req.body
            const usuario = crearUsusario(datosUsuario)
            await usuariosPersistencia.guardar(usuario)
            res.status(201).json(usuario) //res.json le esta contestando al cliente. 

            //res.status no contesta, simplemente agrega un atributo a la respuesta
        } catch (error) {
            next(error)
        }
    },

    get: async (req, res, next) => {
        try {
            res.json(await usuariosPersistencia.obtenerTodos())
        } catch (error) {
            next(error)
        }
    }
}