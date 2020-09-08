import request from 'supertest';

import chai from 'chai';
const assert = chai.assert;

import app from '../index';

const query = "apple ipod";
describe('Meli search API', () => {
    it("returns a result from dev's db given a query", () => {
        request(app)
        .get(`/api/items?q=​${query}`)
        .expect(200)
        .end((err, res) => {
            assert.exists(res.body.results, "results is neither null nor undefined");
            done();
        })
    });
});