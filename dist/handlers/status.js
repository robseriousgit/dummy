'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var status = exports.status = function status(req, res, next) {
  res.send(200, 'OK');
  next();
};