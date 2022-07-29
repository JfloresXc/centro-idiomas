"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _notasNivel = require("../controllers/notas-nivel.controllers");

var _auth = require("../middlewares/auth.middlewares");

var router = (0, _express.Router)();
var getNotasNiveles = _notasNivel.controller.getNotasNiveles,
    postNotasNivel = _notasNivel.controller.postNotasNivel,
    getNotasNivel = _notasNivel.controller.getNotasNivel,
    deleteNotasNivel = _notasNivel.controller.deleteNotasNivel,
    putNotasNivel = _notasNivel.controller.putNotasNivel;
router.get('/', _auth.verifyToken, _auth.isAdministrador, getNotasNiveles).post('/', _auth.verifyToken, _auth.isAdministrador, postNotasNivel).get('/:id', _auth.verifyToken, getNotasNivel)["delete"]('/:id', _auth.verifyToken, _auth.isAdministrador, deleteNotasNivel).put('/:id', _auth.verifyToken, _auth.isModerator, putNotasNivel);
var _default = router;
exports["default"] = _default;