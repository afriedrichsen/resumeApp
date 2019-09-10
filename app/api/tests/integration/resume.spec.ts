import request from 'supertest'
// const httpStatus = require('http-status');
// import { expect } from 'chai'
// import chai from 'chai'
// const sinon = require('sinon');
// const bcrypt = require('bcryptjs');
// const { some, omitBy, isNil } = require('lodash');
import app from '../../config/koa'
// import { DbConnection } from 'app/api/models';
// import { app } from '../../../index'

import { MongoMemoryServer } from 'mongodb-memory-server'

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
    let mongod: MongoMemoryServer
    beforeAll(async () => {
        mongod = new MongoMemoryServer({ instance: {
            port: 27017,
            dbName: 'resume_data'
        },
        })
    })
  it('should get resume index page', async () => {
        const response = await request(app.callback()).get('/')
        expect(response).toBeDefined()
        expect(response.status).toBe(200)
  })
  /*it('should return no data when search params are not found in db', async () => {

  })*/
  afterEach(async () => {
      await app.context.db.mongoose.disconnect()
  })

  /*afterAll(async () => {
      await mongod.stop()
  })*/
})
