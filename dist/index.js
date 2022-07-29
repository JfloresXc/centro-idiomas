"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _server = _interopRequireDefault(require("./config/server"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

_server["default"].listen(_server["default"].get("port"), function () {
  console.log("Server on port ".concat(_server["default"].get("port")));
});