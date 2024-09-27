import {Router} from 'express'
import { createUser } from '../Controller/UserController.js'

const router = Router()

router.post("/",createUser)

export default router