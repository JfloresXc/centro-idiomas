"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controller = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mail = require("../config/mail");

var controller = {};
exports.controller = controller;

controller.sendEmailToUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, news, email;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, news = _req$body.news, email = _req$body.email;
            _context.next = 4;
            return _mail.transporter.sendMail({
              from: "Centro Idiomas <centroidiomas@untels.edu.pe>",
              to: email,
              subject: "Hola ".concat(name, ". Centro de idiomas te informa \uD83D\uDC69\u200D\uD83C\uDFEB"),
              html: "\n\t\t\t\t<h3>Novedades</h3>\n\t\t\t\t<b>".concat(news, "</b>\n\t\t\t")
            });

          case 4:
            res.status(200).json({
              success: true
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              error: _context.t0.message
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();