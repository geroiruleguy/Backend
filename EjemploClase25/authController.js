import { crearErrorAutenticacion } from "./errores.js"
import usuariosPersistencia from './usuariosPersistencia.js'

async function autenticar(username, password) { //funcion que valida las credenciales
    let usuario
    try {
        usuario = await usuariosPersistencia.obtenerPorUsername(username)    
    } catch (error) {
        throw crearErrorAutenticacion()
    }
    
    if(usuario.password != password) {
        throw crearErrorAutenticacion()
    }
    return usuario
}

export const authController = async (req, res, next) => {
    const { username, password } = req.body
    try {
        await autenticar(username, password)
        res.session.username = username //aca estoy escribiendo una variable en el objeto session (obj unico de cada usuario que se manda en la cookie a través del middleware express-session)    
        res.session.mensajeBienvenida = `Bienvenido, ${username}`
        res.sendStatus(200)
    } catch (error) {
        next(error)
    }
}