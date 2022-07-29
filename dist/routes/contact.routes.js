"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _contact = require("../controllers/contact.controllers");

var router = (0, _express.Router)();
var sendEmailToUser = _contact.controller.sendEmailToUser;
router.post("/", sendEmailToUser);
var _default = router;
exports["default"] = _default;