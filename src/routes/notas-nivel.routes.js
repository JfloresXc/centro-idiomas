import { Router } from 'express'
import { controller } from '../controllers/notas-nivel.controllers'
import { verifyToken, isModerator, isAdministrador } from '../middlewares/auth.middlewares'

const router = Router()
const {
    getNotasNiveles,
    postNotasNivel,
    getNotasNivel,
    deleteNotasNivel,
    putNotasNivel
} = controller

router
    .get('/', verifyToken, isAdministrador, getNotasNiveles)
    .post('/', verifyToken, isAdministrador, postNotasNivel)
    .get('/:id', verifyToken, getNotasNivel)
    .delete('/:id', verifyToken, isAdministrador, deleteNotasNivel)
    .put('/:id', verifyToken, isModerator, putNotasNivel)

export default router