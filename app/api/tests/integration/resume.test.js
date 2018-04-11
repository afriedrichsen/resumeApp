const request = require('supertest');
const httpStatus = require('http-status');
const { expect } = require('chai');
//const sinon = require('sinon');
//const bcrypt = require('bcryptjs');
//const { some, omitBy, isNil } = require('lodash');
const app = require('../../../index');


describe ('Resume API', async () => {
    it('should get resume index page', () => {
        return request(app)
            .get('/')
            .expect(httpStatus.OK)
            .then(async (res, err) => {
                expect(res.body).to.be.an('array');
                done();
              }
        })
    });
});