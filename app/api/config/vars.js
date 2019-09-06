const path = require('path');

// import .env variables
require('dotenv-safe').load({
  //   path: path.join(__dirname, '../../.env'),
  //   sample: path.join(__dirname, '../../.env.example'),
  path: path.join(__dirname, '../../config/.env'),
  sample: path.join(__dirname, '../../config/.env.example'),

});


module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,

  mongo: {
    uri: process.env.NODE_ENV === 'test'
      ? process.env.MONGO_URI_TESTS
      : process.env.MONGO_URI,
    /*
        clientKey: process.env.MONGO_CLIENT_KEY,
        caFile: process.env.MONGO_CLIENT_CA,
        clientCert: process.env.MONGO_CLIENT_CERT
        */

    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,

  },

  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
};
