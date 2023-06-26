# Resume - Full-Stack Application

[![Nightly Build](https://github.com/afriedrichsen/resumeApp/actions/workflows/actions.yml/badge.svg)](https://github.com/afriedrichsen/resumeApp/actions/workflows/actions.yml)

<!-- [![Coverage Status](https://coveralls.io/repos/github/afriedrichsen/resumeApp/badge.svg?branch=master)](https://coveralls.io/github/afriedrichsen/resumeApp?branch=master) -->

### Features

- TypeScript for type safety and cleaner JavaScript control.
- TSLint as TypeScript linter
- Prettier.js for opinionated code sytax
- Cloud Deployment support (AWS CDK).

### Prerequisites

- Node.js (18+)
- TypeScript e.g. `npm install -g typescript` or `npm ci` install project version
- Go (1.9+)
- Hugo e.g `npm install -g hugo`

### Installation

#### Development

1. Clone the repository

2. Configure `resume-ui-simple/config.yaml` as you wish or use defaults:

3. Start Development Server:

```
hugo server -s resume-ui-simple
```

4. Confirm running at `http://localhost:1313/`

## Deployment

### Production

Existing GitHub Action workflow (`.workflows/actions.yml`). Requires PR.

## Authors

- **Alex Friedrichsen (afriedrichsen)**
