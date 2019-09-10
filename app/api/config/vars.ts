import path from 'path'

// import .env variables
if (process.env.NODE_ENV === 'development') {
  require('dotenv-safe').load({
    path: path.join(__dirname, '../../config/.env'),
    sample: path.join(__dirname, '../../config/.env.example'),

  })
}


interface ResumeAppConfiguration {
  env: string
  port: string
  mongo: {
    uri: string | undefined
    user: string | undefined
    pass: string | undefined
  },
  logs: string
}


const Config: ResumeAppConfiguration = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || '1337',

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
}

export default Config