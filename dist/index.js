'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _restify = require('restify');

var _restify2 = _interopRequireDefault(_restify);

var _route = require('./route');

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _process$env$PORT = process.env.PORT,
    PORT = _process$env$PORT === undefined ? '1234' : _process$env$PORT;


var server = _restify2.default.createServer();
//server.use(restify.plugins.bodyParser({ mapParams: true }));

(0, _route2.default)(server);

server.listen(parseInt(PORT, 10), function () {
  console.log(server.name + ' listening at ' + server.url);
});

exports.default = server;