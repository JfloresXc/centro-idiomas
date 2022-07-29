import { Router } from 'express'
import { controller } from '../controllers/curso.controllers'
import { verifyToken, isAdministrador } from '../middlewares/auth.middlewares'

const router = Router()
const {
    getCursos,
    postCurso,
    getCurso,
    deleteCurso,
    putCurso
} = controller

router
    .get('/', verifyToken, isAdministrador, getCursos)
    .post('/', verifyToken, isAdministrador, postCurso)
    .get('/:id', verifyToken, getCurso)
    .delete('/:id', verifyToken, isAdministrador, deleteCurso)
    .put('/:id', verifyToken, isAdministrador, putCurso)

export default router