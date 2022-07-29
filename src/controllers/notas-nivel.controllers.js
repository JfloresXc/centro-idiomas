import NotasNivel from '../models/notasNivel.model'

const controller = {}

controller.getNotasNiveles = async (req, res) => {
    const notasNiveles = await NotasNivel.find()
        .populate('nivel')
        .populate('profesor')
    res.json(notasNiveles)
}

controller.postNotasNivel = async (req, res) => {
    try {
        const notasNivel = new NotasNivel({ ...req.body })
        await notasNivel.save()
        res.json(notasNivel)
    } catch (error) {
        console.log(error);
        res.json({ message: 'NotasNivel not added' })
    }
}

controller.getNotasNivel = async (req, res) => {
    try {
        const { id } = req.params
        const notasNivel = await NotasNivel.findById(id)
        res.json(notasNivel)
    } catch (error) {
        console.log(error);
        res.json({ message: 'NotasNivel not found' })
    }
}

controller.deleteNotasNivel = async (req, res) => {
    try {
        const { id } = req.params
        await NotasNivel.findByIdAndDelete(id)
        res.json({ message: 'NotasNivel deleted successfully' })
    } catch (error) {
        console.log(error);
        res.json({ message: 'NotasNivel not deleted' })
    }
}

controller.putNotasNivel = async (req, res) => {
    try {
        const { id } = req.params
        const notasNivel = await NotasNivel.findByIdAndUpdate(id, { ...req, body })
        res.json(notasNivel)
    } catch (error) {
        console.log(error);
        res.json({ message: 'NotasNivel not updated' })
    }
}

export { controller }