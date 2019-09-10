// const express = require('express');
import express from 'express'
// const resume = require('../data/resume');
// const controller = require('../controllers/resume.controller')
import * as controller from '../controllers/resume.controller'

// Here is our router.
const router = express.Router()

router
  .route('/')
    .get(controller.index)

export default router