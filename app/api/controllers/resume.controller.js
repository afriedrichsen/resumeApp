//const resume = require('../data/resume');
const mongoose = require('mongoose');
const { handler: errorHandler } = require('../middlewares/error');


// Here is where we load our resume model.
const Resume = require('../models/resume.model');

exports.index = (req, res, next) => {

  try {

   Resume.find({user_name: 'Alexander Friedrichsen'}).exec().then((resumedata) => {
       const result = JSON.parse(JSON.stringify(resumedata[0]));
       // Pass resume to view engine (pug template).
       res.render('index',result);
  });

  } catch (exception) {

  }
}