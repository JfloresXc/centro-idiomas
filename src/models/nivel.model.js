import { Schema, model } from 'mongoose'

const Nivel = new Schema({
    nombre: { type: String, required: true },
    curso: { type: Schema.Types.ObjectId, ref: "cursos", required: true },
}, {
    timestamps: true,
    versionKey: false
})

export default model('niveles', Nivel)