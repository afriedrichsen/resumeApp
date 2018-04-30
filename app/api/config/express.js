const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('../routes');
const { logs } = require('./vars');
const error = require('../middlewares/error');
const path = require('path');
const favicon = require('serve-favicon');
const static = require('serve-static');
/**
 * Express instance
 * @public
 */
const app = express();

app.set("name", "Alexander Friedrichsen");
app.set("homepage", "alex.friedrichsen.me");
app.set("email", "afriedrichsen@me.com");
app.set("phone", "+1.605.380.7346");
app.set('title', "" + (app.get('name')) + " — Resume");
//app.use(express.logger('dev'));
app.set('port', process.env.PORT || 2112);
app.set('views', path.join(__dirname,'../../api/views'));
app.set('view engine', 'pug');
app.use(favicon(path.join(__dirname, '../../public/img/favicon.ico')));

app.use(morgan(logs));


// parse body params and attach them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//compression
app.use(compress());


app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

//Here is our public folder/content.
app.use(express["static"](path.join(__dirname, '../../public')));

//Here are the routes for our API.
// Alternatively, we can break these out by "sub-roots" (e.g. /v1, /v2, /beta, /prod etc.)
app.use('/', routes);

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

module.exports = app;