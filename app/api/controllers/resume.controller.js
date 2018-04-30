const resume = require('../data/resume');
const mongoose = require('mongoose');
const { handler: errorHandler } = require('../middlewares/error');


// Here is where we load our resume model.
const Resume = require('../models/resume.model');

exports.index = async (req, res, next) => {

  try {

 //   const bs = await Resume.find({user_name: 'Alexander Friedrichsen'}).exec();
   // var results = [];
  //  const result = JSON.stringify(bs[0]);
   //console.log(bs);
   //console.log("JSON file is...")
  // console.log(resume)
  // results.push(bs);
 // console.log(bs);
   return res.render('index', resume);
    //return next();
  } catch (error) {
    //return errorHandler(error, req, res);
      return next(error);
  }
}