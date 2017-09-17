// Server script.
var app, express, http, path, routes, bodyParser, favicon, logger;

express = require('express');

routes = require('./api/routes/routesResume');

http = require('http');

path = require('path');
bodyParser = require('body-parser');
logger = require('morgan');
favicon = require('serve-favicon');
methodOverride  = require('method-override')
static = require('serve-static');

app = express();

app.set("name", "Alexander Friedrichsen");
app.set("homepage", "alex.friedrichsen.me");
app.set("email", "afriedrichsen@me.com");
app.set("phone", "+1.605.380.7346");
app.set('title', "" + (app.get('name')) + " — Resume");
//app.use(express.logger('dev'));
app.set('port', process.env.PORT || 2112);
app.set('views', __dirname + '/api/views');
app.set('view engine', 'jade');
app.use(favicon(path.join(__dirname, '/public/img/favicon.ico')));
app.use(bodyParser());
app.use(methodOverride());
app.use(express["static"](path.join(__dirname, '/public')));

routes(app);

//app.configure('development', function() {
//  return app.use(express.errorHandler());
//});

app.get('*', function(req, res) {
  return res.redirect("http://alex.friedrichsen.me/resume.html");
});

http.createServer(app).listen(app.get('port'), function() {
  return console.log("Express server listening on port " + app.get('port'));
});