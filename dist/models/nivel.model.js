"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var Nivel = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  curso: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "cursos",
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('niveles', Nivel);

exports["default"] = _default;