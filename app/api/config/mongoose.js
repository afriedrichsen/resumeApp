const mongoose = require('mongoose');
const { mongo, env } = require('./vars');
const fs = require('fs');

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;


// These are some additional db options.
let options;

// const options = {
/*
    "sslKey": fs.readFileSync('/etc/ssl/mongouat_key.pem'),
    "sslCert": fs.readFileSync('/etc/ssl/mongouat.cer'),
    "sslCa": fs.readFileSync('/etc/ssl/CAIntranet_chain.pem')

    sslKey: fs.readFileSync(mongo.clientKey),
    sslCert: fs.readFileSync(mongo.clientCert),
    sslCa: fs.readFileSync(mongo.caFile),
    */
//    keepAlive: 1,
//    useMongoClient: true,
//    user: mongo.user,
//    pass: mongo.pass,
//    auth: {
//        authdb: 'admin'
//    }
// };


if (env === 'test' || env === 'development') {
  options = {
    keepAlive: 1,
    // useMongoClient: true,
  };
} else {
  options = {
    keepAlive: 1,
    // useMongoClient: true,
    user: mongo.user,
    pass: mongo.pass,
    auth: {
      authdb: 'resume_prod',
    },
  };
}

// Exit application on error
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

// print mongoose logs in dev env
if (env === 'development') {
  mongoose.set('debug', true);
}

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
exports.connect = () => {
  mongoose.connect(mongo.uri, options);
  return mongoose.connection;
};
