var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var flash = require("flash");
var passport = require("passport");
LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');


var routes = require('./routes/movie');
var authenticate = require('./routes/authentication');

var app = express();
var db  = require('./db');
var User = require('./models/user');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/public/views');

// passport
//app.use(flash());
//app.use(express.session({ secret: 'so secret' }));
app.use(passport.initialize());
app.use(passport.session());


// passport strategy to authenticate user
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done) {
   new User({email: username}).fetch().then(function(data) {
      var user = data;
      if(user === null) {
         return done(null, false, {message: 'no user found with this email'});
      } else {
         user = data.toJSON();
         if(!bcrypt.compareSync(password, user.password)) {
            return done(null, false, {message: 'Invalid password'});
         } else {
            return done(null, user);
         }
      }
   });
}));

passport.serializeUser(function(user, done) {
  done(null, user.email);
});

passport.deserializeUser(function(username, done) {
   new User({email: username}).fetch().then(function(user) {
      done(null, user);
   });
});

app.use('/', authenticate);
app.use('/movie', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// catch error from movie db
app.use(function(err, req, res, next) {
  if (err.response && err.response.text) {
    res.status(err.status || 500);
    res.send(err.response.text);
  } else {
    next(err);
  }
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
    return;
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
  return;
});

module.exports = app;
