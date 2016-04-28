var express = require('express');
var router = express.Router();
var passport = require('passport');
var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');

var sign_in = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      var error_user = new Error('User not found');
      error_user.status = 404;
      error_user.attribute = 'email';
      return next(error_user);
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.send(user);
    });
  })(req, res, next);
};

router.post('/login', sign_in);

router.post('/register', function(req, res, next) {
  var user = req.body;
   var usernamePromise = null;
   usernamePromise = new User({email: user.email}).fetch();

   return usernamePromise.then(function(model) {
      if(model) {
        var error_user = new Error('user already exists');
        error_user.status = 409;
        error_user.attribute = 'email';
        return next(error_user);
      } else {
         var password = user.password;
         var hash = bcrypt.hashSync(password);

         var signUpUser = new User({email: user.email, password: hash, first_name: user.first_name, last_name: user.last_name});
         signUpUser.save().then(function(model) {
            // sign in the newly registered user
            sign_in(req, res, next);
         });
      }
   });
});

module.exports = router;