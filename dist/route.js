'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _status = require('./handlers/status');

exports.default = function (server) {
  // Status check
  server.get('/__health', _status.status);
};