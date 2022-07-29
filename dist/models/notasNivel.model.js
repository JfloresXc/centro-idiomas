"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var NotasNivel = new _mongoose.Schema({
  notaPromedioPracticas: {
    type: Number,
    "default": 0
  },
  notaTrabajosAcademicos: {
    type: Number,
    "default": 0
  },
  notaExamenParcial: {
    type: Number,
    "default": 0
  },
  notaExamenFinal: {
    type: Number,
    "default": 0
  },
  notaPromedioFinal: {
    type: Number,
    "default": 0
  },
  nivel: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "niveles",
    required: true
  },
  profesor: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "profesores",
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('notasNiveles', NotasNivel);

exports["default"] = _default;