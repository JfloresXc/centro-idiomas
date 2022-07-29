import Curso from '../models/curso.model'

const controller = {}

controller.getCursos = async (req, res) => {
    const cursos = await Curso.find()
    res.json(cursos)
}

controller.postCurso = async (req, res) => {
    try {
        const curso = new Curso({ ...req.body })
        await curso.save()
        res.json(curso)
    } catch (error) {
        console.log(error);
        res.json({ message: 'Curso not added' })
    }
}

controller.getCurso = async (req, res) => {
    try {
        const { id } = req.params
        const curso = await Curso.findByOne(id).populate()
        res.json(curso)
    } catch (error) {
        console.log(error);
        res.json({ message: 'Curso not found' })
    }
}

controller.deleteCurso = async (req, res) => {
    try {
        const { id } = req.params
        await Curso.findByIdAndDelete(id)
        res.json({ message: 'Curso deleted successfully' })
    } catch (error) {
        console.log(error);
        res.json({ message: 'Curso not deleted' })
    }
}

controller.putCurso = async (req, res) => {
    try {
        const { id } = req.params
        const curso = await Curso.findByIdAndUpdate(id, { ...req, body })
        res.json(curso)
    } catch (error) {
        console.log(error);
        res.json({ message: 'Curso not updated' })
    }
}

export { controller }