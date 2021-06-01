# Resume - Full-Stack Application

[![Build Status](https://travis-ci.org/afriedrichsen/resumeApp.svg?branch=master)](https://travis-ci.org/afriedrichsen/resumeApp)
[![Coverage Status](https://coveralls.io/repos/github/afriedrichsen/resumeApp/badge.svg?branch=master)](https://coveralls.io/github/afriedrichsen/resumeApp?branch=master)

### Features

- ES2017 Syntax for Express
- TypeScript for type safety and cleaner JavaScript control.
- Docker build
- Pug (formerly JADE) HTML templating engine
- NoSQL support (DynamoDB or MongoDB)
- API documentation generation with apidoc
- Mocha, Chai and Sinon for unit and integration testing
- TSLint as TypeScript linter
- Prettier.js for opinionated code sytax
- Cloud Deployment support (AWS and Azure).

### Prerequisites

- Node.js (9.1+)
- Go (1.6+)
- Serverless Framework
- Docker (if running as container)

### Installation

#### Development

1.) Set up MongoDB, either locally or remote.

2.) Clone the repository

3.) Copy .env.example to .env. Edit as necessary.

```
cd resumeApp/app/api
cp .env.example .env
nano .env
```

4.) Run the application.

```
cd ../../ (Assuming you followed Step 2, otherwise, change to project root).
npm run development
```

#### Production (Docker Container)

Rather than run the application, instead change into the project root directory and build the Docker image locally.

```
cd resumeApp
docker build -t <your tag> .
```

Alternatively, you can also run the project in Docker swarm for easy scaling.

```
docker-compose up

OR

docker stack deploy -c docker-compose.yml <stack name here>
```

## Authors

- **Alex Friedrichsen (afriedrichsen)**
