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
        this.renderCalled = true
        await this.context.render(targetView, variables)
    }
}