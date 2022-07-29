"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _default = function _default() {
  var DB_URI = process.env.DB_URI;

  _mongoose["default"].connect(DB_URI, {}).then(function () {
    return console.log('Database connected');
  })["catch"](function (error) {
    return console.log(error);
  });
};

exports["default"] = _default;