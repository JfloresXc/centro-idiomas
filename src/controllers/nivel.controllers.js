import Nivel from '../models/nivel.model'

const controller = {}

controller.getNiveles = async (req, res) => {
    const niveles = await Nivel.find().populate('curso')
    res.json(niveles)
}

controller.postNivel = async (req, res) => {
    try {
        const nivel = new Nivel({ ...req.body })
        await nivel.save()
        res.json(nivel)
    } catch (error) {
        console.log(error);
        res.json({ message: 'Nivel not added' })
    }
}

controller.getNivel = async (req, res) => {
    try {
        const { id } = req.params
        const nivel = await Nivel.findById(id)
        res.json(nivel)
    } catch (error) {
        console.log(error);
        res.json({ message: 'Nivel not found' })
    }
}

controller.deleteNivel = async (req, res) => {
    try {
        const { id } = req.params
        await Nivel.findByIdAndDelete(id)
        res.json({ message: 'Nivel deleted successfully' })
    } catch (error) {
        console.log(error);
        res.json({ message: 'Nivel not deleted' })
    }
}

controller.putNivel = async (req, res) => {
    try {
        const { id } = req.params
        const nivel = await Nivel.findByIdAndUpdate(id, { ...req, body })
        res.json(nivel)
    } catch (error) {
        console.log(error);
        res.json({ message: 'Nivel not updated' })
    }
}

export { controller }