'use strict';

var resume = require('../data/resume');

exports.index = function(req, res) {
  return res.render('index', resume);
};