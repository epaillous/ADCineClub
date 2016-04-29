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
var adminApp = require('express-admin');

var movieRoutes = require('./routes/movie');
var userRoutes = require('./routes/user');
var screeningRoutes = require('./routes/screening');
var authenticate = require('./routes/authentication');

var app = express();
var db  = require('./db');
var User = require('./models/user');

var config = {
    dpath: './admin_config/',
    config: require('./admin_config/config.json'),
    settings: require('./admin_config/settings.json'),
    users: require('./admin_config/users.json'),
    custom: require('./admin_config/custom.json'),
};

adminApp.init(config, function (err, admin) {
  app.use('/admin', admin);
});

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
app.use('/movie', movieRoutes);
app.use('/screening', screeningRoutes);
app.use('/user', userRoutes);



module.exports = app;
