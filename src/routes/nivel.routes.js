import { Router } from 'express'
import { controller } from '../controllers/nivel.controllers'
import { verifyToken, isAdministrador } from '../middlewares/auth.middlewares'

const router = Router()
const {
    getNiveles,
    postNivel,
    getNivel,
    deleteNivel,
    putNivel
} = controller

router
    .get('/', verifyToken, isAdministrador, getNiveles)
    .post('/', verifyToken, isAdministrador, postNivel)
    .get('/:id', verifyToken, isAdministrador, getNivel)
    .delete('/:id', verifyToken, isAdministrador, deleteNivel)
    .put('/:id', verifyToken, isAdministrador, putNivel)

export default router