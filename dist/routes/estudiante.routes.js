"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _estudiante = require("../controllers/estudiante.controllers");

var _auth = require("../middlewares/auth.middlewares");

var router = (0, _express.Router)();
var getEstudiantes = _estudiante.controller.getEstudiantes,
    postEstudiante = _estudiante.controller.postEstudiante,
    getEstudiante = _estudiante.controller.getEstudiante,
    getEstudianteForToken = _estudiante.controller.getEstudianteForToken,
    deleteEstudiante = _estudiante.controller.deleteEstudiante,
    putEstudiante = _estudiante.controller.putEstudiante,
    signin = _estudiante.controller.signin,
    signup = _estudiante.controller.signup;
router.get('/', _auth.verifyToken, _auth.isAdministrador, getEstudiantes).post('/', postEstudiante).get('/token', _auth.verifyToken, getEstudianteForToken).get('/:id', _auth.verifyToken, _auth.isAdministrador, getEstudiante)["delete"]('/:id', _auth.verifyToken, _auth.isAdministrador, deleteEstudiante).put('/:id', _auth.verifyToken, _auth.isAdministrador, putEstudiante).post('/signin', signin).post('/signup', signup);
var _default = router;
exports["default"] = _default;