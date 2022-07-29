import express from "express"
import morgan from "morgan"
import cors from "cors"
import path from "path"

import estudiantes from "../routes/estudiante.routes"
import administradores from "../routes/administrador.routes"
import profesores from "../routes/profesor.routes"
import provincias from "../routes/provincia.routes"
import notasNivel from "../routes/notas-nivel.routes"
import niveles from "../routes/nivel.routes"
import cursos from "../routes/curso.routes"
import contact from "../routes/contact.routes"

const app = express()

// SETTINGS
app.set("port", process.env.PORT || 2424)

// MIDDLEWARES
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// ROUTES
app.use("/api/estudiantes", estudiantes)
app.use("/api/profesores", profesores)
app.use("/api/administradores", administradores)
app.use("/api/provincias", provincias)
app.use("/api/notas-nivel", notasNivel)
app.use("/api/niveles", niveles)
app.use("/api/cursos", cursos)
app.use("/api/contact", contact)

// STATICS FILES
app.use(express.static(path.join(__dirname, "../../frontend/build")))
app.get("/", (req, res) => {
	res.render("index.html")
})

module.exports = app
