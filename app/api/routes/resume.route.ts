// const express = require('express');
// import express, { Router } from 'express'
// const resume = require('../data/resume');
// const controller = require('../controllers/resume.controller')
// import * as controller from '../controllers/resume.controller'

// Here is our router.
// const router: Router = express.Router()

/*router
  .route('/')
    .get(controller.index)*/
// router.get('/', controller.index)

// export default router

import EnhancedRouter from './enhanced_router'
import ResumeController from '../controllers/resume.controller'

export default function setupResumeRoutes(publicRouter: EnhancedRouter, privateRouter: EnhancedRouter) {
  publicRouter.getC('/', ResumeController, con => con.index())
}