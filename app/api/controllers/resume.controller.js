const resume = require('../data/resume');
const mongoose = require('mongoose');
const { handler: errorHandler } = require('../middlewares/error');


// Here is where we load our resume model.
//const Resume = require('../models/resume.model');

exports.index = async (req, res, next) => {

  try {

 //   const resume = await Resume.find({user_name: "Alexander Friedrichsen"});

 //   console.log(resume);

    return res.render('index', resume[0]);
    //return resume;
    //req.locals = { resume };

  //  return next();
  } catch (error) {
    //return errorHandler(error, req, res);
      return next(error);
  }
}