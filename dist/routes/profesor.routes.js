"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _profesor = require("../controllers/profesor.controllers");

var _auth = require("../middlewares/auth.middlewares");

var router = (0, _express.Router)();
var getProfesores = _profesor.controller.getProfesores,
    postProfesor = _profesor.controller.postProfesor,
    getProfesor = _profesor.controller.getProfesor,
    deleteProfesor = _profesor.controller.deleteProfesor,
    putProfesor = _profesor.controller.putProfesor,
    signin = _profesor.controller.signin,
    signup = _profesor.controller.signup;
router.get('/', _auth.verifyToken, _auth.isAdministrador, getProfesores).post('/', _auth.verifyToken, _auth.isAdministrador, postProfesor).get('/:id', _auth.verifyToken, _auth.isModerator, getProfesor)["delete"]('/:id', _auth.verifyToken, _auth.isAdministrador, deleteProfesor).put('/:id', _auth.verifyToken, _auth.isAdministrador, putProfesor).post('/signin', signin).post('/signup', signup);
var _default = router;
exports["default"] = _default;