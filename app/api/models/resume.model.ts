// const mongoose = require('mongoose');
import mongoose, { MongooseDocument, Mongoose } from 'mongoose'
// import httpStatus from 'http-status'
const Schema = mongoose.Schema
/**
 * User Schema
 * @private
 */
/* const ResumeSchema = new Schema({

    }, {collection: 'resume_data'}) */
export interface ResumeAttributes {}
export interface ResumeInstance extends mongoose.Document {

}
/**
 * Methods
 */


/**
 * Statics
 */

/**
 * Export schema for use.
 */
// export default mongoose.model('resume_data', ResumeSchema)

export function defineResume(mongoose: Mongoose) {
    const ResumeSchema = new Schema({

    }, {collection: 'resume_data'})
    return mongoose.model('resume_data', ResumeSchema)
}