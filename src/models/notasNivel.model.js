import { Schema, model } from 'mongoose'

const NotasNivel = new Schema({
    notaPromedioPracticas: { type: Number, default: 0 },
    notaTrabajosAcademicos: { type: Number, default: 0 },
    notaExamenParcial: { type: Number, default: 0 },
    notaExamenFinal: { type: Number, default: 0 },
    notaPromedioFinal: { type: Number, default: 0 },
    nivel: { type: Schema.Types.ObjectId, ref: "niveles", required: true },
    profesor: { type: Schema.Types.ObjectId, ref: "profesores", required: true },
}, {
    timestamps: true,
    versionKey: false
})

export default model('notasNiveles', NotasNivel)