import { Schema, model } from 'mongoose'

const Curso = new Schema({
    nombre: { type: String, required: true, unique: true },
}, {
    timestamps: true,
    versionKey: false
})

export default model('cursos', Curso)