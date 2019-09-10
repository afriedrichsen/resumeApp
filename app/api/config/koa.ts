/* import Express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import compress from 'compression'
import methodOverride from 'method-override'
import cors from 'cors'
import helmet from 'helmet'
import routes from '../routes'
import Config from './vars'
import * as error from '../middlewares/error'
import path from 'path'
import favicon from 'serve-favicon'*/
import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import send from 'koa-send'
import '../../types/koa_extension'
import cors from '@koa/cors'

import path from 'path'

import serve from 'koa-static'

import morgan from 'koa-morgan'
import views from 'koa-views'

import database from './mongoose'

import Config from './vars'
import EnhancedRouter from '../routes/enhanced_router'
import { setupRoutes } from '../routes'
// import Pug from 'koa-pug'

const app = new Koa()

/* app.set('name', 'Alexander Friedrichsen')
app.set('homepage', 'alex.friedrichsen.me')
app.set('email', 'afriedrichsen@me.com')
app.set('phone', '+1.605.380.7346')
app.set('title', `${app.get('name')} — Resume`)*/

app.use(bodyparser())
app.use(cors())
app.context.db = database

if (process.env.NODE_ENV) {
    app.use(morgan(Config.logs))
}

app.use(serve(path.join(__dirname, '../../public')))

app.use(views(__dirname + '/../views', {
    extension: 'pug',
}))


// Setup routes
const publicRouter = new EnhancedRouter()
const privateRouter = new EnhancedRouter()

setupRoutes(publicRouter, privateRouter)

app.use(publicRouter.routes())

export default app