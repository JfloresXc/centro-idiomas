import { Router } from 'express'
import { controller } from '../controllers/profesor.controllers'
import { verifyToken, isAdministrador, isModerator } from '../middlewares/auth.middlewares'

const router = Router()
const {
    getProfesores,
    postProfesor,
    getProfesor,
    deleteProfesor,
    putProfesor,
    signin,
    signup
} = controller

router
    .get('/', verifyToken, isAdministrador, getProfesores)
    .post('/', verifyToken, isAdministrador, postProfesor)
    .get('/:id', verifyToken, isModerator, getProfesor)
    .delete('/:id', verifyToken, isAdministrador, deleteProfesor)
    .put('/:id', verifyToken, isAdministrador, putProfesor)
    .post('/signin', signin)
    .post('/signup', signup)

export default router