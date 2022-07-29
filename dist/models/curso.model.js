"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var Curso = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('cursos', Curso);

exports["default"] = _default;