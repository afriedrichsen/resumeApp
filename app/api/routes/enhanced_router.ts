import Router from 'koa-router'
// import ControllerBase from '../controllers/controller_base'

enum HTTPMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

type ControllerCallback<T> = (controller: T) => Promise<void>

export default class EnhancedRouter extends Router {
  mount<T>(
    method: HTTPMethod,
    route: string,
    controllerClass: new (ctx: Router.IRouterContext) => T,
    callback: ControllerCallback<T>
  ): EnhancedRouter {
    this[method](route, async (ctx, next) => {
      const controller = new controllerClass(ctx)
      await callback(controller)
    })

    return this
  }

  getC<T>(
    route: string,
    controllerClass: new (ctx: Router.IRouterContext) => T,
    callback: ControllerCallback<T>
  ): EnhancedRouter {
    return this.mount(HTTPMethod.GET, route, controllerClass, callback)
  }

  postC<T>(
    route: string,
    controllerClass: new (ctx: Router.IRouterContext) => T,
    callback: ControllerCallback<T>
  ): EnhancedRouter {
    return this.mount(HTTPMethod.POST, route, controllerClass, callback)
  }

  putC<T>(
    route: string,
    controllerClass: new (ctx: Router.IRouterContext) => T,
    callback: ControllerCallback<T>
  ): EnhancedRouter {
    return this.mount(HTTPMethod.PUT, route, controllerClass, callback)
  }

  deleteC<T>(
    route: string,
    controllerClass: new (ctx: Router.IRouterContext) => T,
    callback: ControllerCallback<T>
  ): EnhancedRouter {
    return this.mount(HTTPMethod.DELETE, route, controllerClass, callback)
  }
}