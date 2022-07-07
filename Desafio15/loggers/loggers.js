import pino from "pino";
import { loggers } from "winston";

function allPeticiones() {
    const allPet = pino()
    allPet.level = 'info'
    return allPet
}

function rutasInexistentes() {
    const rutasInex = pino('warn.log')
    rutasInex.level = 'warn'
    return rutasInex
}


let logger = null

if (process.env.NODE_ENV === 'production'){
    logger = allPeticiones()
} else {
    logger = rutasInexistentes()
} 

export default logger