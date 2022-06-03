import ContenedorMemoria from '../contenedores/ContenedorMemoria.js'
import { generarProductos } from '../utils/generadorProductos'
import { generarId } from '../utils/generadorId'

class ApiProductosMock extends ContenedorMemoria {
    constructor() { super() }

    popular(cant = 5) {
        const nuevos = []
        for (let i = 0; i < cant; i++) {
            const nuevoProducto = generarProductos(generarId())
            const guardado = this.guardar(nuevoProducto)
            nuevos.push(guardado)
        }
        return nuevos
    }
}

export default ApiProductosMock