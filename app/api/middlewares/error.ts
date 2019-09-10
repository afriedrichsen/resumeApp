// const httpStatus = require('http-status');
import httpStatus from 'http-status'
import expressValidation from 'express-validation'
const APIError = require('../utils/APIError')
// const { env } = require('../config/vars')
import Config from '../config/vars'

/**
 * Error handler. Send stacktrace only during development
 * @public
 */
export const handler = (err: any, req: any, res: any, next: any) => {
    const response = {
        code: err.status,
        // message: err.message || httpStatus[err.status],
        message: err.message || httpStatus['500'],
        errors: err.errors,
        stack: err.stack,
    }

    if (Config.env !== 'development') {
        delete response.stack
    }

    res.status(err.status)
    res.json(response)
    res.end()
}
// export const handler = handler

/**
 * If error is not an instanceOf APIError, convert it.
 * @public
 */
export const converter = (err: any, req: any, res: any, next: any) => {
    let convertedError = err

    if (err instanceof expressValidation.ValidationError) {
        convertedError = new APIError({
            message: 'Error',
            errors: err.errors,
            status: err.status,
            stack: err.statusText,
        })
    } else if (!(err instanceof APIError)) {
        convertedError = new APIError({
            message: err.message,
            status: err.status,
            stack: err.stack,
        })
    }

    return handler(convertedError, req, res, next())
}


/**
 * Catch 404 and forward to error handler
 * @public
 */
export const notFound = (req: any, res: any, next: any) => {
    const err = new APIError({
        message: 'Not found',
        status: httpStatus.NOT_FOUND,
    })
    return handler(err, req, res, next())
}