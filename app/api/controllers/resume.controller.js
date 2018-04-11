//'use strict';

//var resume = require('../data/resume');

//exports.index = function(req, res) {
 // return res.render('index', resume);
//};

const resume = require('../data/resume');
const { handler: errorHandler } = require('../middlewares/error');

exports.index = async (req, res) => {

  try {
    return res.render('index', resume);
  } catch (error) {
    return errorHandler(error, req, res);
  }
}