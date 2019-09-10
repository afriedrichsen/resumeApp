import Router from 'koa-router'
import { DbConnection } from '../models'
import { BaseContext } from 'koa'

interface Result {
    success: boolean
    results: any[]
    errorMessage?: string
    changeToken?: number
}

export default abstract class ControllerBase {
    protected db: DbConnection
    protected context: Router.IRouterContext | BaseContext
    // protected currentLogin?: any
    private renderCalled: boolean

    constructor(ctx: Router.IRouterContext | BaseContext) {
        this.context = ctx
        this.db = ctx.db
        this.renderCalled = false
    }

    async renderView(targetView: string, variables?: any) {
        // this.renderCalled = true
        this.context.status = 200
        await this.context.render(targetView, variables)
    }

    renderJson(status: number, data: { [key: string]: any }) {
        if (this.renderCalled) {
            throw Error('Cannot call render twice for one request')
        }

        this.context.status = status
        this.context.body = data
        this.renderCalled = true
    }
}