import request from 'supertest'
// const httpStatus = require('http-status');
// import { expect } from 'chai'
// import chai from 'chai'
// const sinon = require('sinon');
// const bcrypt = require('bcryptjs');
// const { some, omitBy, isNil } = require('lodash');
import app from '../../config/koa'
// import { app } from '../../../index'

// const testApp = app()

// testApp.use('/', routes)

// Integration test for resume Express API follows.


/*
describe ('Resume API', async () => {
    it('should get resume index page', () => {
        return request(app)
            .get('/')
            .then((res, err) => {
            expect(httpStatus.OKAY);
            expect(res.body).to.be.an('object');
        });
    });

    it('should error out on invalid path.', async () =>{
        return request(app)
            .get('/poop')
            .then((res, err) => {
                expect(httpStatus.NOT_FOUND);
                expect(res.body.code).to.be.equal(404);
        });
    });

    it('should error out on invalid request type', async () => {
        return request(app)
            .post('/')
            .send({id: '2'})
            .then((res, err) => {
                expect(httpStatus.BAD_REQUEST);
        });
    });
});
*/


describe('Resume API', () => {
  it('should get resume index page', async (done) => {
        const response = await request(app.callback()).get('/')
        expect(response).toBeDefined()
        return done()
  })
  afterEach(async () => {
      await app.context.db.mongoose.disconnect()
  })
})
