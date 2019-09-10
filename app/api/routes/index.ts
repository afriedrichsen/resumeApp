// const express = require('express');
// import express from 'express'
// import resumeRoutes from './resume.route'

// const router = express.Router()

// Only one route right now
// router.use('/', resumeRoutes)

// export default router
import EnhancedRouter from './enhanced_router'
import setupResumeRoutes from './resume.route'


export function setupRoutes(publicRouter: EnhancedRouter, privateRouter: EnhancedRouter) {
    [setupResumeRoutes].forEach((setup) => {
        setup(publicRouter, privateRouter)
    })
}