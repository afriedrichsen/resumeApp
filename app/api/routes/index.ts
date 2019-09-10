// const express = require('express');
import express from 'express'
import * as resumeRoutes from './resume.route'

const router = express.Router()

// Only one route right now
router.use('/', resumeRoutes as any)

export default router