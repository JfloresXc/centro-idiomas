import { Schema, model } from 'mongoose'
import bcryptjs from 'bcryptjs'

const Administrador = new Schema({
    username: { type: String, unique: true },
    password: { type: String, required: true },
    nombres: { type: String, required: true },
    apellidoPaterno: { type: String, required: true },
    apellidoMaterno: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    provincia: { type: Schema.Types.ObjectId, ref: "provincias", required: true },
    fechaNacimiento: { type: Date, required: true },
    telefono: { type: String, required: true },
    sexo: { type: String, required: true }
}, {
    timestamps: true,
    versionKey: false
})

Administrador.methods.encryptPassword = async function(){
    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password, salt)
}

Administrador.methods.matchPassword = async function ({ passwordValue }) {
    return await bcryptjs.compare(passwordValue, this.password)
}

export default model('administradores', Administrador)