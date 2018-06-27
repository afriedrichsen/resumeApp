const request = require('supertest');
const httpStatus = require('http-status');
const { expect } = require('chai');
const mongoose = require('mongoose');
//const sinon = require('sinon');
//const bcrypt = require('bcryptjs');
//const { some, omitBy, isNil } = require('lodash');
const app = require('../../../index');
const config = require('../../config/vars');


// Integration test for mongoose ORM follows.
// Create a new schema that accepts a 'name' object.
// 'name' is a required field
const testSchema = new mongoose.Schema({
    name: { type: String, required: true }
});
//Create a new collection called 'Name'
const Name = mongoose.model('Name', testSchema);

describe('Database Tests', () => {
    //Before starting the test, create a sandboxed database connection
    //Once a connection is established invoke done()
    before((done) => {
    mongoose.connect(config.mongo.uri);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', () => {
        console.log('We are connected to the test database!');
        done();
    });
});
//After all tests are finished drop database and close connection
after((done) => {
    mongoose.connection.db.dropDatabase(() => {
        mongoose.connection.close(done);
    });
});
});