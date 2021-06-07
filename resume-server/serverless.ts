import type { AWS } from '@serverless/typescript'

import server from '@functions/server'

const serverlessConfiguration: AWS = {
  service: 'resume-server',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_ENV: 'production'
    },
    lambdaHashingVersion: '20201221',
    iam: {
      role: {
        name: 'friedrichsen-resume-server-lambda-exec-role',
        statements: [{
          Effect: 'Allow',
          Action: ['dynamodb:*'],
          Resource: '*'
        }],
      }
    },
  },
  // import the function via paths
  functions: { server },
}

module.exports = serverlessConfiguration
