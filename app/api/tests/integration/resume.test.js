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
            .then((res, err) => {
            expect(httpStatus.OKAY);
            expect(res.body).to.be.an('object');
            done();
        });
    });
});