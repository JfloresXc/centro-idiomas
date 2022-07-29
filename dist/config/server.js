"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _estudiante = _interopRequireDefault(require("../routes/estudiante.routes"));

var _administrador = _interopRequireDefault(require("../routes/administrador.routes"));

var _profesor = _interopRequireDefault(require("../routes/profesor.routes"));

var _provincia = _interopRequireDefault(require("../routes/provincia.routes"));

var _notasNivel = _interopRequireDefault(require("../routes/notas-nivel.routes"));

var _nivel = _interopRequireDefault(require("../routes/nivel.routes"));

var _curso = _interopRequireDefault(require("../routes/curso.routes"));

var _contact = _interopRequireDefault(require("../routes/contact.routes"));

var app = (0, _express["default"])(); // SETTINGS

app.set("port", process.env.PORT || 2424); // MIDDLEWARES

app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _cors["default"])()); // ROUTES

app.use("/api/estudiantes", _estudiante["default"]);
app.use("/api/profesores", _profesor["default"]);
app.use("/api/administradores", _administrador["default"]);
app.use("/api/provincias", _provincia["default"]);
app.use("/api/notas-nivel", _notasNivel["default"]);
app.use("/api/niveles", _nivel["default"]);
app.use("/api/cursos", _curso["default"]);
app.use("/api/contact", _contact["default"]); // STATICS FILES

app.use(_express["default"]["static"](_path["default"].join(__dirname, "../../frontend/build")));
app.get("/", function (req, res) {
  res.render("index.html");
});
var _default = app;
exports["default"] = _default;