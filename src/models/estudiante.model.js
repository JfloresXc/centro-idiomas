import { Schema, model } from 'mongoose'
import mongoose from 'mongoose'
import bcryptjs from 'bcryptjs'

const Estudiante = new Schema({
    username: { type: String, unique: true },
    password: { type: String, required: true },
    nombres: { type: String, required: true },
    apellidoPaterno: { type: String, required: true },
    apellidoMaterno: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    provincia: { type: mongoose.Types.ObjectId, ref: "provincias", required: true },
    fechaNacimiento: { type: Date, required: true },
    telefono: { type: String, required: true },
    sexo: { type: String, required: true },
    notasNiveles: [{ type: mongoose.Types.ObjectId, ref: 'notasNiveles', default: "" }],
    mensualidad: { type: Number, default: 0 },
}, {
    timestamps: true,
    versionKey: false
})

Estudiante.methods.encryptPassword = async function () {
    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password, salt)
}

Estudiante.methods.matchPassword = async function ({ passwordValue }) {
    return await bcryptjs.compare(passwordValue, this.password)
}

export default model('estudiantes', Estudiante)