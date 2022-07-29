import { Router } from "express"
import { controller } from "../controllers/contact.controllers"

const router = Router()
const { sendEmailToUser } = controller

router.post("/", sendEmailToUser)

export default router
