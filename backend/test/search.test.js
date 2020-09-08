import { server } from '../index';
import "regenerator-runtime/runtime.js";

import request from 'supertest';

import chai from 'chai';
const assert = chai.assert;

const query = "apple ipod";

describe('Meli search API', () => {
    describe('do search of user input', () => {
        it("returns a result from dev's db given a query", () => {
            request(server)
            .get(`/api/items`)
            .query({ q: encodeURIComponent(query) })
            .expect(200)
            .end((err, res) => {
                if(err) console.log(err);
                assert.exists(res.body.results, "results is neither null nor undefined");
            })
        });
    });
});