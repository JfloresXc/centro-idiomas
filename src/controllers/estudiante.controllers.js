import Estudiante from '../models/estudiante.model'
import Provincia from '../models/provincia.model'
import { SECRET_KEY } from '../config/config'
import jwt from 'jsonwebtoken'

const controller = {}

controller.signin = async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await Estudiante.findOne({ username })
        if (!user) return res.json({ message: 'Username not found' })
        const isFinded = await user.matchPassword({ passwordValue: password })
        if (!isFinded) return res.json({ message: 'Password not match' })

        const token = await jwt.sign({ id: user._id }, SECRET_KEY, {
            expiresIn: "1d"
        })
        res.json({ token, user })
    } catch (error) {
        console.log(error)
        res.json({ message: 'Signin error' })
    }
}

controller.signup = async (req, res) => {
    try {
        const estudiante = new Estudiante({ ...req.body })
        await estudiante.encryptPassword()
        await estudiante.save()
        res.json(estudiante)
    } catch (error) {
        console.log(error);
        res.json({ message: 'Estudiante not added' })
    }
}

controller.getEstudiantes = async (req, res) => {
    const estudiantes = await Estudiante.find()
        .populate('provincia')
        .populate('notasNiveles')
    res.json(estudiantes)
}

controller.postEstudiante = async (req, res) => {
    try {
        const { provincia, sexo } = req.body
        const sexoSelect = sexo === 'Masculino' ? 'M' : 'F'
        const {_id} = await Provincia.findOne({ nombre: provincia })
        const estudiante = new Estudiante({ ...req.body, provincia: _id, sexo: sexoSelect })
        await estudiante.encryptPassword()
        await estudiante.save()
        res.json(estudiante)
    } catch (error) {
        console.log(error);
        res.json({ message: 'Estudiante not added' })
    }
}

controller.getEstudiante = async (req, res) => {
    try {
        const { id } = req.params
        const estudiante = await Estudiante.findOne({ _id: id })
            .populate("provincia")
            .populate("notasNiveles")
        res.json(estudiante)
    } catch (error) {
        console.log(error);
        res.json({ message: 'Estudiante not found' })
    }
}

controller.getEstudianteForToken = async (req, res) => {
    try {
        const id = req.userId
        const estudiante = await Estudiante.findOne({ _id: id })
            .populate("provincia")
            .populate("notasNiveles")
        res.json(estudiante)
    } catch (error) {
        console.log(error);
        res.json({ message: 'Estudiante not found' })
    }
}

controller.deleteEstudiante = async (req, res) => {
    try {
        const { id } = req.params
        await Estudiante.findByIdAndDelete(id)
        res.json({ message: 'Estudiante deleted successfully' })
    } catch (error) {
        console.log(error);
        res.json({ message: 'Estudiante not deleted' })
    }
}

controller.putEstudiante = async (req, res) => {
    try {
        const { id } = req.params
        const estudiante = await Estudiante.findByIdAndUpdate(id, { ...req, body })
        res.json(estudiante)
    } catch (error) {
        console.log(error);
        res.json({ message: 'Estudiante not updated' })
    }
}

export { controller }