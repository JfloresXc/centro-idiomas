"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _curso = require("../controllers/curso.controllers");

var _auth = require("../middlewares/auth.middlewares");

var router = (0, _express.Router)();
var getCursos = _curso.controller.getCursos,
    postCurso = _curso.controller.postCurso,
    getCurso = _curso.controller.getCurso,
    deleteCurso = _curso.controller.deleteCurso,
    putCurso = _curso.controller.putCurso;
router.get('/', _auth.verifyToken, _auth.isAdministrador, getCursos).post('/', _auth.verifyToken, _auth.isAdministrador, postCurso).get('/:id', _auth.verifyToken, getCurso)["delete"]('/:id', _auth.verifyToken, _auth.isAdministrador, deleteCurso).put('/:id', _auth.verifyToken, _auth.isAdministrador, putCurso);
var _default = router;
exports["default"] = _default;