import Administrador from "../models/administrador.model"
import { SECRET_KEY } from "../config/config"
import jwt from "jsonwebtoken"

const controller = {}

controller.signin = async (req, res) => {
	try {
		const { username, password } = req.body

		const user = await Administrador.findOne({ username })

		if (!user) return res.json({ message: "Username not found" })
		const isFinded = await user.matchPassword({ passwordValue: password })
		if (!isFinded) return res.json({ message: "Password not match" })

		const token = await jwt.sign({ id: user._id }, SECRET_KEY, {
			expiresIn: "1d",
		})
		res.json({ token })
	} catch (error) {
		console.log(error)
		res.json({ message: "Signin error" })
	}
}

controller.signup = async (req, res) => {
	try {
		const administrador = new Administrador({ ...req.body })
		await administrador.encryptPassword()
		await administrador.save()
		res.json(administrador)
	} catch (error) {
		console.log(error)
		res.json({ message: "Administrador not added" })
	}
}

controller.getAdministradores = async (req, res) => {
	const administradores = await Administrador.find().populate("provincia")
	res.json(administradores)
}

controller.postAdministrador = async (req, res) => {
	try {
		const administrador = new Administrador({ ...req.body })
		await administrador.encryptPassword()
		await administrador.save()
		res.json(administrador)
	} catch (error) {
		console.log(error)
		res.json({ message: "Administrador not added" })
	}
}

controller.getAdministrador = async (req, res) => {
	try {
		const { id } = req.params
		const administrador = await Administrador.findOne({ _id: id })
			.populate("provincia")
			.populate("notasNiveles")
		res.json(administrador)
	} catch (error) {
		console.log(error)
		res.json({ message: "Administrador not found" })
	}
}

controller.deleteAdministrador = async (req, res) => {
	try {
		const { id } = req.params
		await Administrador.findByIdAndDelete(id)
		res.json({ message: "Administrador deleted successfully" })
	} catch (error) {
		console.log(error)
		res.json({ message: "Administrador not deleted" })
	}
}

controller.putAdministrador = async (req, res) => {
	try {
		const { id } = req.params
		const administrador = await Administrador.findByIdAndUpdate(id, {
			...req,
			body,
		})
		res.json(administrador)
	} catch (error) {
		console.log(error)
		res.json({ message: "Administrador not updated" })
	}
}

export { controller }
