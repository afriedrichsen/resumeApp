# Resume Node JS Application
[![Build Status](https://travis-ci.org/afriedrichsen/resumeApp.svg?branch=master)](https://travis-ci.org/afriedrichsen/resumeApp)

### Features
* ES2017 Syntax for ExpressJS
* Docker build
* Vanilla JavaScript (no transpilers)
* Mongoose (MongoDB) support
* API documentation generation with apidoc


### Prerequisites

* NodeJS (9.6+)
* Docker (if running as container)


### Installation

#### Development
1.) Clone the repository

2.) Copy .env.example to .env. Edit as necessary.
```
cd resumeApp/app/api
cp .env.example .env
nano .env
```

3.) Run the application.
```
cd ../../ (Assuming you followed step one, otherwise, change to project root).
npm run development
```
#### Production (Docker Container)

Rather than run the application, instead change into the project root directory and build the Docker image locally.

```
cd resumeApp
docker build -t <your tag> .
```

## Authors

* **Alex Friedrichsen (afriedrichsen)**
