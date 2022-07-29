import Profesor from '../models/profesor.model'
import { SECRET_KEY } from '../config/config'
import jwt from 'jsonwebtoken'

const controller = {}

controller.signin = async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await Profesor.findOne({ username })
        if (!user) return res.json({ message: 'Username not found' })
        const isFinded = await user.matchPassword({ passwordValue: password })
        if (!isFinded) return res.json({ message: 'Password not match' })

        const token = await jwt.sign({ id: user._id }, SECRET_KEY, {
            expiresIn: "1d"
        })
        res.json({ token })
    } catch (error) {
        console.log(error)
        res.json({ message: 'Signin error' })
    }
}

controller.signup = async (req, res) => {
    try {
        const profesor = new Profesor({ ...req.body })
        await profesor.encryptPassword()
        await profesor.save()
        res.json(profesor)
    } catch (error) {
        console.log(error);
        res.json({ message: 'Profesor not added' })
    }
}

controller.getProfesores = async (req, res) => {
    const profesores = await Profesor.find().populate('provincia')
    res.json(profesores)
}

controller.postProfesor = async (req, res) => {
    try {
        const profesor = new Profesor({ ...req.body })
        await profesor.encryptPassword()
        await profesor.save()
        res.json(profesor)
    } catch (error) {
        console.log(error);
        res.json({ message: 'Profesor not added' })
    }
}

controller.getProfesor = async (req, res) => {
    try {
        const { id } = req.params
        const profesor = await Profesor.findById(id)
        res.json(profesor)
    } catch (error) {
        console.log(error);
        res.json({ message: 'Profesor not found' })
    }
}

controller.deleteProfesor = async (req, res) => {
    try {
        const { id } = req.params
        await Profesor.findByIdAndDelete(id)
        res.json({ message: 'Profesor deleted successfully' })
    } catch (error) {
        console.log(error);
        res.json({ message: 'Profesor not deleted' })
    }
}

controller.putProfesor = async (req, res) => {
    try {
        const { id } = req.params
        const profesor = await Profesor.findByIdAndUpdate(id, { ...req, body })
        res.json(profesor)
    } catch (error) {
        console.log(error);
        res.json({ message: 'Profesor not updated' })
    }
}

export { controller }