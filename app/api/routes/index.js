const express = require('express');
const resumeRoutes = require('./resume.route');

const router = express.Router();

// Only one route right now
router.use('/', resumeRoutes);

module.exports = router;