import { server } from '../index';
import 'regenerator-runtime/runtime.js';

import request from 'supertest';

import chai from 'chai';
const assert = chai.assert;

const query = 'apple ipod';

describe('Meli search API', () => {
    describe('do search of user input', () => {
        it("returns a result from dev's db given a query", () => {
            request(server)
            .get(`/api/items`)
            .query({ q: encodeURIComponent(query) })
            .expect(200)
            .end((err, res) => {
                if(err) console.log(err);
                const body = res.body;
                assert.exists(body.author, 'author is neither null nor undefined');
                assert.isObject(body.author, 'custom signature for search action');
                assert.exists(body.categories, 'categories as a result of search');
                assert.isArray(body.categories, 'categories is an array of results for a given query');
                assert.exists(body.items, 'items is neither null nor undefined');
                assert.isArray(body.items, 'items is an array of results for a given query');
            })
        });
    });
});