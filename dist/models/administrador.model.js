"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = require("mongoose");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var Administrador = new _mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  nombres: {
    type: String,
    required: true
  },
  apellidoPaterno: {
    type: String,
    required: true
  },
  apellidoMaterno: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true,
    unique: true
  },
  provincia: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "provincias",
    required: true
  },
  fechaNacimiento: {
    type: Date,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  sexo: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});
Administrador.methods.encryptPassword = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var salt;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _bcryptjs["default"].genSalt(10);

        case 2:
          salt = _context.sent;
          _context.next = 5;
          return _bcryptjs["default"].hash(this.password, salt);

        case 5:
          this.password = _context.sent;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));

Administrador.methods.matchPassword = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
    var passwordValue;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            passwordValue = _ref2.passwordValue;
            _context2.next = 3;
            return _bcryptjs["default"].compare(passwordValue, this.password);

          case 3:
            return _context2.abrupt("return", _context2.sent);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

var _default = (0, _mongoose.model)('administradores', Administrador);

exports["default"] = _default;