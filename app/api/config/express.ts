import Express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import compress from 'compression'
import methodOverride from 'method-override'
import cors from 'cors'
import helmet from 'helmet'
// const routes = require('../routes')
import routes from '../routes'
import Config from './vars'
// const error = require('../middlewares/error')
import * as error from '../middlewares/error'
import path from 'path'
import favicon from 'serve-favicon'
/**
 * Express instance
 * @public
 */
const app = Express()

app.set('name', 'Alexander Friedrichsen')
app.set('homepage', 'alex.friedrichsen.me')
app.set('email', 'afriedrichsen@me.com')
app.set('phone', '+1.605.380.7346')
app.set('title', `${app.get('name')} — Resume`)
// app.use(express.logger('dev'));
app.set('port', process.env.PORT || 2112)
app.set('views', path.join(__dirname, '../../api/views'))

// We use pug for our templating engine.
app.set('view engine', 'pug')

app.use(favicon(path.join(__dirname, '../../public/img/favicon.ico')))

app.use(morgan(Config.logs))


// parse body params and attach them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// compression
app.use(compress())


app.use(methodOverride())

// secure apps by setting various HTTP headers
app.use(helmet())

// enable CORS - Cross Origin Resource Sharing
app.use(cors())

// Here is our public folder/content.
app.use(Express.static(path.join(__dirname, '../../public')))

// Here are the routes for our API.
// Alternatively, we can break these out by "sub-roots" (e.g. /v1, /v2, /beta, /prod etc.)
app.use('/', routes)

// if error is not an instanceOf APIError, convert it.
app.use(error.converter)

// catch 404 and forward to error handler
app.use(error.notFound)

// error handler, send stacktrace only during development
app.use(error.handler)

export default app
