// const express = require('express');
import express from 'express'
import resumeRoutes from './resume.route'

const router = express.Router()

// Only one route right now
router.use('/', resumeRoutes)

export default router