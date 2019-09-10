// const resume = require('../data/resume');
// const mongoose = require('mongoose');
// import mongoose from 'mongoose'
// const { handler: errorHandler } = require('../middlewares/error')


// Here is where we load our resume model.
const Resume = require('../models/resume.model')

export const index = (req: any, res: any, next: any) => {
  try {
    Resume.find({ user_name: 'Alexander Friedrichsen' }).exec().then((resumedata: any) => {
      const result = JSON.parse(JSON.stringify({ data: resumedata[0] }))
      // Pass resume to view engine (pug template).
      res.render('index', result.data)
    })
  } catch (exception) {
    console.log(exception)
  }
}
