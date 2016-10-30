var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var requestValidator = require('express-validator');
var requestSession = require('express-session');
var db = require('./model/db'),
    User = require('./model/users');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
//body parser makes it possible to posy JSON to the server
//we can access data we post on as req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(requestValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//By default it will store the session in memory but this will not be good for production.
//In production use database to store sessions ex) MongoDB
app.use(requestSession({secret:'max',saveUninitialized:false,resave:false}));
//app.use is the middleware function
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    if (err.name === 'ValidationError') {
      var errMessage = [];
      for (field in err.errors) {
        errMessage.push(err.errors[field].message);
      }
      res.status(500).json(errMessage);
    } else {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    }
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  console.log("Middleware3");
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

var port = 3000;
app.listen(port,function () {
  console.log('Listening on http://localhost:',port);
});