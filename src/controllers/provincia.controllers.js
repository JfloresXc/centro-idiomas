import Provincia from '../models/provincia.model'

const controller = {}

controller.getProvincias = async (req, res) => {
    const provincias = await Provincia.find()
    res.json(provincias)
}

controller.postProvincia = async (req, res) => {
    try {
        const provincia = new Provincia({ ...req.body })
        await provincia.save()
        res.json(provincia)
    } catch (error) {
        console.log(error);
        res.json({ message: 'Provincia not added' })
    }
}

controller.getProvincia = async (req, res) => {
    try {
        const { id } = req.params
        const provincia = await Provincia.findById(id)
        res.json(provincia)
    } catch (error) {
        console.log(error);
        res.json({ message: 'Provincia not found' })
    }
}

controller.deleteProvincia = async (req, res) => {
    try {
        const { id } = req.params
        await Provincia.findByIdAndDelete(id)
        res.json({ message: 'Provincia deleted successfully' })
    } catch (error) {
        console.log(error);
        res.json({ message: 'Provincia not deleted' })
    }
}

controller.putProvincia = async (req, res) => {
    try {
        const { id } = req.params
        const provincia = await Provincia.findByIdAndUpdate(id, { ...req, body })
        res.json(provincia)
    } catch (error) {
        console.log(error);
        res.json({ message: 'Provincia not updated' })
    }
}

export { controller }