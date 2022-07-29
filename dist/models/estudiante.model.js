"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Estudiante = new _mongoose.Schema({
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
    type: _mongoose["default"].Types.ObjectId,
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
  },
  notasNiveles: [{
    type: _mongoose["default"].Types.ObjectId,
    ref: 'notasNiveles',
    "default": ""
  }],
  mensualidad: {
    type: Number,
    "default": 0
  }
}, {
  timestamps: true,
  versionKey: false
});
Estudiante.methods.encryptPassword = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
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

Estudiante.methods.matchPassword = /*#__PURE__*/function () {
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

var _default = (0, _mongoose.model)('estudiantes', Estudiante);

exports["default"] = _default;