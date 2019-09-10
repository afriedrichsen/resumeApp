import * as Koa from 'koa'
import { DbConnection } from '../api/models'

declare module 'koa' {
    interface BaseContext {
        db: DbConnection,
    }
}