'use strict';

var _chai = require('chai');

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _index = require('../../../lib/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Health check route', function () {
  it('returns ok', function () {
    (0, _supertest2.default)(_index2.default).get('/__health').end(function (err, res) {
      (0, _chai.expect)(res.statusCode).to.eql(200);
      (0, _chai.expect)(res.body).to.eql('OK');
    });
  });
});