// make bluebird default Promise

// Promise = require('bluebird'); // eslint-disable-line no-global-assign
// const app = require('./api/config/express');
// import app from './api/config/express'
import app from './api/config/koa'
import * as Config from './api/config/vars'

// const mongoose = require('./api/config/mongoose')
import * as mongoose from './api/config/mongoose'

// open mongoose connection

/* mongoose.connect().then(() => {
    try {
        app.listen(Config.default.port, () => console.info(`server started on port ${Config.default.port} (${Config.default.env})`))
    } catch (exception) {
        console.log(exception)
        return exception
    }
})*/

// listen to requests
app.listen(Config.default.port)

console.log(
    `🤖 Resume App ${Config.default.env} App Server is listening on port ${Config.default.port}`
  )