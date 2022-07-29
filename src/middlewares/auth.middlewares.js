import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../config/config'
import Profesor from '../models/profesor.model'
import Administrador from '../models/administrador.model'

export const verifyToken = async (req, res, next) => {
    const token = req.headers["x-access-token"]

    try {
        const payload = jwt.verify(token, SECRET_KEY)
        if (!payload) res.json({ error: 'Invalidated token' })

        req.userId = payload.id;
        next()
    } catch (error) {
        console.log(error);
        res.json({ error: 'Unauthorized' })
    }
}

export const isModerator = async (req, res, next) => {
    const profesor = await Profesor.findById(req.userId)
    if (profesor) {
        return next()
    }

    const administrador = await Administrador.findById(req.userId)
    if (administrador) {
        return next()
    }
    res.json({ message: 'No permissions' })
}

export const isAdministrador = async (req, res, next) => {
    const administrador = await Administrador.findById(req.userId)
    if (administrador) {
        return next()
    }

    res.json({ message: 'No permissions' })
}