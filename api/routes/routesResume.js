/*var resume;

resume = require('../data/resume');

exports.index = function(req, res) {
  return res.render('index', resume);
};
*/


'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/resumeController');

  // todoList Routes
  app.route('/')
    .get(todoList.index)
  //  .post(todoList.create_a_task);


 // app.route('/tasks/:taskId')
  //  .get(todoList.read_a_task)
  //  .put(todoList.update_a_task)
  //  .delete(todoList.delete_a_task);
};