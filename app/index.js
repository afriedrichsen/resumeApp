// make bluebird default Promise

Promise = require('bluebird'); // eslint-disable-line no-global-assign
const { port, env } = require('./api/config/vars');
const app = require('./api/config/express');

// const mongoose = require('./config/mongoose');

// open mongoose connection

// mongoose.connect();

console.log(process.env.NODE_ENV);

// listen to requests
app.listen(port, () => console.info(`server started on port ${port} (${env})`));

/**
* Exports express
* @public
*/

module.exports = app;
