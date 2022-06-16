import { Router } from "express"
import { authController } from "./authController.js"

export const authRouter = new Router()
 
authRouter.post('/login', authController)

