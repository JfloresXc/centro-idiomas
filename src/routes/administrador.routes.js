import { Router } from "express"
import { controller } from "../controllers/administrador.controllers"
import { verifyToken, isAdministrador } from "../middlewares/auth.middlewares"

const router = Router()
const {
	getAdministradores,
	postAdministrador,
	getAdministrador,
	deleteAdministrador,
	putAdministrador,
	signin,
	signup,
} = controller

router
	.get("/", verifyToken, isAdministrador, getAdministradores)
	.post("/", verifyToken, isAdministrador, postAdministrador)
	.get("/:id", verifyToken, isAdministrador, getAdministrador)
	.delete("/:id", verifyToken, isAdministrador, deleteAdministrador)
	.put("/:id", verifyToken, isAdministrador, putAdministrador)
	.post("/signin", signin)
	.post("/signup", signup)

export default router
