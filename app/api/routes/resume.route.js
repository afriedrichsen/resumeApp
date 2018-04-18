const express = require('express');
//const resume = require('../data/resume');
const controller = require('../controllers/resume.controller');

// Here is our router.
const router = express.Router();

router
  .route('/')
    .get(controller.index);

module.exports = router;