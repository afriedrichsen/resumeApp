// Here is where we load our resume model.
// const Resume = require('../models/resume.model')
import Resume from '../models/resume.model'

export const index = async (req: any, res: any, next: any) => {
  try {
    const resume = await Resume.find({ user_name: 'Alexander Friedrichsen' }).exec()
    if (!resume) {
      console.log('No results found!')
      res.error('No results found')
    }
    const result = JSON.parse(JSON.stringify({ data: resume[0] }))
    res.render('index', result.data)
  } catch (exception) {
    console.log(exception)
  }
}
