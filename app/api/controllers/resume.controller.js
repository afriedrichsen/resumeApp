//const resume = require('../data/resume');
const mongoose = require('mongoose');
const { handler: errorHandler } = require('../middlewares/error');


// Here is where we load our resume model.
const Resume = require('../models/resume.model');

exports.index = async (req, res, next) => {

  try {

 //   console.log(Resume.get('Alexander Friedrichsen'));

  } catch (error) {
    return errorHandler(error, req, res);
    //  return next(error);
  }
}