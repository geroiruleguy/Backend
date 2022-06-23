import { Router } from "express";

export const infoRouter = new Router()

console.log(process.execPath)
console.log(process.node)
console.log(process.platform)
console.log(process.pid)
console.log('Versión actual', process.version)

