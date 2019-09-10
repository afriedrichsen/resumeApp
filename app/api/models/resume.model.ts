// const mongoose = require('mongoose');
import mongoose from 'mongoose'
import httpStatus from 'http-status'
// import moment from 'moment'
// const uuidv4 = require('uuid/v4');
// const APIError = require('../utils/APIError');
const Schema = mongoose.Schema
/**
 * User Schema
 * @private
 */
const ResumeSchema = new Schema({

    }, {collection: 'resume_data'})
/**
 * Methods
 */


/**
 * Statics
 */

/**
 * Export schema for use.
 */
module.exports = mongoose.model('resume_data', ResumeSchema)