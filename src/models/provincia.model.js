import { Schema, model } from 'mongoose'

const Provincia = new Schema({
    nombre: { type: String, required: true, unique: true },
}, {
    timestamps: true,
    versionKey: false
})

export default model('provincias', Provincia)