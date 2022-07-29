import { Router } from 'express'
import { controller } from '../controllers/provincia.controllers'
import { verifyToken, isAdministrador } from '../middlewares/auth.middlewares'

const router = Router()
const {
    getProvincias,
    postProvincia,
    getProvincia,
    deleteProvincia,
    putProvincia
} = controller

router
    .get('/', getProvincias)
    .post('/', verifyToken, isAdministrador, postProvincia)
    // .post('/', postProvincia)
    .get('/:id', verifyToken, isAdministrador, getProvincia)
    .delete('/:id', verifyToken, isAdministrador, deleteProvincia)
    .put('/:id', verifyToken, isAdministrador, putProvincia)

export default router