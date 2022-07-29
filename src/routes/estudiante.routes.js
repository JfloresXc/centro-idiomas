import { Router } from 'express'
import { controller } from '../controllers/estudiante.controllers'
import { verifyToken, isAdministrador } from '../middlewares/auth.middlewares'

const router = Router()
const {
    getEstudiantes,
    postEstudiante,
    getEstudiante,
    getEstudianteForToken,
    deleteEstudiante,
    putEstudiante,
    signin,
    signup
} = controller

router
    .get('/', verifyToken, isAdministrador, getEstudiantes)
    .post('/', postEstudiante)
    .get('/token', verifyToken, getEstudianteForToken)
    .get('/:id', verifyToken, isAdministrador, getEstudiante)
    .delete('/:id', verifyToken, isAdministrador, deleteEstudiante)
    .put('/:id', verifyToken, isAdministrador, putEstudiante)
    .post('/signin', signin)
    .post('/signup', signup)

export default router