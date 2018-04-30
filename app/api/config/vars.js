const path = require('path');

//import .env variables
// Only import if we're not running in Docker.
if (process.env.NODE_ENV!='production_docker') {
    require('dotenv-safe').load({
        path: path.join(__dirname, '../../.env'),
        sample: path.join(__dirname, '../../.env.example'),
    });
}


module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,

     mongo: {
        uri: process.env.NODE_ENV === 'test'
            ? process.env.MONGO_URI_TESTS
            : process.env.MONGO_URI,
    },

    logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
};