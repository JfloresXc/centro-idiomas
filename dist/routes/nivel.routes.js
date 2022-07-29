"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _nivel = require("../controllers/nivel.controllers");

var _auth = require("../middlewares/auth.middlewares");

var router = (0, _express.Router)();
var getNiveles = _nivel.controller.getNiveles,
    postNivel = _nivel.controller.postNivel,
    getNivel = _nivel.controller.getNivel,
    deleteNivel = _nivel.controller.deleteNivel,
    putNivel = _nivel.controller.putNivel;
router.get('/', _auth.verifyToken, _auth.isAdministrador, getNiveles).post('/', _auth.verifyToken, _auth.isAdministrador, postNivel).get('/:id', _auth.verifyToken, _auth.isAdministrador, getNivel)["delete"]('/:id', _auth.verifyToken, _auth.isAdministrador, deleteNivel).put('/:id', _auth.verifyToken, _auth.isAdministrador, putNivel);
var _default = router;
exports["default"] = _default;