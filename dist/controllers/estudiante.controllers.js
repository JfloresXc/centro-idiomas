"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controller = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _estudiante = _interopRequireDefault(require("../models/estudiante.model"));

var _provincia = _interopRequireDefault(require("../models/provincia.model"));

var _config = require("../config/config");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var controller = {};
exports.controller = controller;

controller.signin = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, username, password, user, isFinded, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, username = _req$body.username, password = _req$body.password;
            _context.next = 4;
            return _estudiante["default"].findOne({
              username: username
            });

          case 4:
            user = _context.sent;

            if (user) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.json({
              message: 'Username not found'
            }));

          case 7:
            _context.next = 9;
            return user.matchPassword({
              passwordValue: password
            });

          case 9:
            isFinded = _context.sent;

            if (isFinded) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", res.json({
              message: 'Password not match'
            }));

          case 12:
            _context.next = 14;
            return _jsonwebtoken["default"].sign({
              id: user._id
            }, _config.SECRET_KEY, {
              expiresIn: "1d"
            });

          case 14:
            token = _context.sent;
            res.json({
              token: token,
              user: user
            });
            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              message: 'Signin error'
            });

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 18]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

controller.signup = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var estudiante;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            estudiante = new _estudiante["default"](_objectSpread({}, req.body));
            _context2.next = 4;
            return estudiante.encryptPassword();

          case 4:
            _context2.next = 6;
            return estudiante.save();

          case 6:
            res.json(estudiante);
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.json({
              message: 'Estudiante not added'
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

controller.getEstudiantes = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var estudiantes;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _estudiante["default"].find().populate('provincia').populate('notasNiveles');

          case 2:
            estudiantes = _context3.sent;
            res.json(estudiantes);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

controller.postEstudiante = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body2, provincia, sexo, sexoSelect, _yield$Provincia$find, _id, estudiante;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _req$body2 = req.body, provincia = _req$body2.provincia, sexo = _req$body2.sexo;
            sexoSelect = sexo === 'Masculino' ? 'M' : 'F';
            _context4.next = 5;
            return _provincia["default"].findOne({
              nombre: provincia
            });

          case 5:
            _yield$Provincia$find = _context4.sent;
            _id = _yield$Provincia$find._id;
            estudiante = new _estudiante["default"](_objectSpread(_objectSpread({}, req.body), {}, {
              provincia: _id,
              sexo: sexoSelect
            }));
            _context4.next = 10;
            return estudiante.encryptPassword();

          case 10:
            _context4.next = 12;
            return estudiante.save();

          case 12:
            res.json(estudiante);
            _context4.next = 19;
            break;

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.json({
              message: 'Estudiante not added'
            });

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 15]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

controller.getEstudiante = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, estudiante;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _estudiante["default"].findOne({
              _id: id
            }).populate("provincia").populate("notasNiveles");

          case 4:
            estudiante = _context5.sent;
            res.json(estudiante);
            _context5.next = 12;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.json({
              message: 'Estudiante not found'
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

controller.getEstudianteForToken = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, estudiante;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.userId;
            _context6.next = 4;
            return _estudiante["default"].findOne({
              _id: id
            }).populate("provincia").populate("notasNiveles");

          case 4:
            estudiante = _context6.sent;
            res.json(estudiante);
            _context6.next = 12;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.json({
              message: 'Estudiante not found'
            });

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

controller.deleteEstudiante = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            id = req.params.id;
            _context7.next = 4;
            return _estudiante["default"].findByIdAndDelete(id);

          case 4:
            res.json({
              message: 'Estudiante deleted successfully'
            });
            _context7.next = 11;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            res.json({
              message: 'Estudiante not deleted'
            });

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

controller.putEstudiante = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var id, estudiante;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            id = req.params.id;
            _context8.next = 4;
            return _estudiante["default"].findByIdAndUpdate(id, _objectSpread(_objectSpread({}, req), {}, {
              body: body
            }));

          case 4:
            estudiante = _context8.sent;
            res.json(estudiante);
            _context8.next = 12;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](0);
            console.log(_context8.t0);
            res.json({
              message: 'Estudiante not updated'
            });

          case 12:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 8]]);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();