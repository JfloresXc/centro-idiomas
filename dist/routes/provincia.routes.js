"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _provincia = require("../controllers/provincia.controllers");

var _auth = require("../middlewares/auth.middlewares");

var router = (0, _express.Router)();
var getProvincias = _provincia.controller.getProvincias,
    postProvincia = _provincia.controller.postProvincia,
    getProvincia = _provincia.controller.getProvincia,
    deleteProvincia = _provincia.controller.deleteProvincia,
    putProvincia = _provincia.controller.putProvincia;
router.get('/', getProvincias).post('/', _auth.verifyToken, _auth.isAdministrador, postProvincia) // .post('/', postProvincia)
.get('/:id', _auth.verifyToken, _auth.isAdministrador, getProvincia)["delete"]('/:id', _auth.verifyToken, _auth.isAdministrador, deleteProvincia).put('/:id', _auth.verifyToken, _auth.isAdministrador, putProvincia);
var _default = router;
exports["default"] = _default;