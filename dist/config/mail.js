"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transporter = void 0;

var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "jfloresxc@gmail.com",
    pass: "hfaasveuxhmzzvic"
  }
});
exports.transporter = transporter;
transporter.verify().then(function () {
  console.log("Ready for send emails");
});