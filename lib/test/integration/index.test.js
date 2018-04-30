import { expect } from 'chai';
import request from 'supertest';
import server from '../../../lib/index'

describe('Health check route', () => {
  it('returns ok', () => {
    request(server).get('/__health').end((err, res) => {
      expect(res.statusCode).to.eql(200);
      expect(res.body).to.eql('OK');
    });
  });
});