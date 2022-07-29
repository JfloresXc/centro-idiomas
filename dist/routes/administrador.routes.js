"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _administrador = require("../controllers/administrador.controllers");

var _auth = require("../middlewares/auth.middlewares");

var router = (0, _express.Router)();
var getAdministradores = _administrador.controller.getAdministradores,
    postAdministrador = _administrador.controller.postAdministrador,
    getAdministrador = _administrador.controller.getAdministrador,
    deleteAdministrador = _administrador.controller.deleteAdministrador,
    putAdministrador = _administrador.controller.putAdministrador,
    signin = _administrador.controller.signin,
    signup = _administrador.controller.signup;
router.get("/", _auth.verifyToken, _auth.isAdministrador, getAdministradores).post("/", _auth.verifyToken, _auth.isAdministrador, postAdministrador).get("/:id", _auth.verifyToken, _auth.isAdministrador, getAdministrador)["delete"]("/:id", _auth.verifyToken, _auth.isAdministrador, deleteAdministrador).put("/:id", _auth.verifyToken, _auth.isAdministrador, putAdministrador).post("/signin", signin).post("/signup", signup);
var _default = router;
exports["default"] = _default;