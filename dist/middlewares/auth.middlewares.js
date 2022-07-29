"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdministrador = exports.isModerator = exports.verifyToken = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = require("../config/config");

var _profesor = _interopRequireDefault(require("../models/profesor.model"));

var _administrador = _interopRequireDefault(require("../models/administrador.model"));

var verifyToken = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, payload;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.headers["x-access-token"];

            try {
              payload = _jsonwebtoken["default"].verify(token, _config.SECRET_KEY);
              if (!payload) res.json({
                error: 'Invalidated token'
              });
              req.userId = payload.id;
              next();
            } catch (error) {
              console.log(error);
              res.json({
                error: 'Unauthorized'
              });
            }

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function verifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifyToken = verifyToken;

var isModerator = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var profesor, administrador;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _profesor["default"].findById(req.userId);

          case 2:
            profesor = _context2.sent;

            if (!profesor) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", next());

          case 5:
            _context2.next = 7;
            return _administrador["default"].findById(req.userId);

          case 7:
            administrador = _context2.sent;

            if (!administrador) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", next());

          case 10:
            res.json({
              message: 'No permissions'
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function isModerator(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.isModerator = isModerator;

var isAdministrador = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var administrador;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _administrador["default"].findById(req.userId);

          case 2:
            administrador = _context3.sent;

            if (!administrador) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", next());

          case 5:
            res.json({
              message: 'No permissions'
            });

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function isAdministrador(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.isAdministrador = isAdministrador;