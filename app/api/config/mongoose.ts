// const mongoose = require('mongoose');
import mongoose, { ConnectionOptions } from 'mongoose'
import Config from './vars'

// set mongoose Promise to Bluebird
mongoose.Promise = Promise


// These are some additional db options.
let options: ConnectionOptions


if (Config.env === 'test' || Config.env === 'development') {
  options = {
    keepAlive: true,
    useNewUrlParser: true,
  }
} else {
  options = {
    keepAlive: true,
    useNewUrlParser: true,
    user: Config.mongo.user || '',
    pass: Config.mongo.pass || '',
    auth: {
      // authdb: 'resume_prod',
      user: Config.mongo.user || '',
      password: Config.mongo.pass || '',
    },
  }
}

// Exit application on error
mongoose.connection.on('error', (err: any) => {
  console.error(`MongoDB connection error: ${err}`)
  process.exit(-1)
})

// print mongoose logs in dev env
if (Config.env === 'development') {
  mongoose.set('debug', true)
}

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
export const connect = async () => {
  if (!Config.mongo.uri) {
    console.log('No database connection information provided!')
    return
  }
  try {
  console.log('Establishing database connection to ' + Config.mongo.uri + '...')
  await mongoose.connect(Config.mongo.uri, options)
  console.log('Database Connection successful!')
  // return mongoose.connection
  } catch (exception) {
    console.log('Database connection ERROR!!!!')
    console.log(exception)
    return
  }
}
