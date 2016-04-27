var express = require('express');
var router = express.Router();
var passport = require('passport');
var bcrypt = require('bcrypt-nodejs');

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
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send('no user');
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.send(user);
    });
  })(req, res, next);
});

module.exports = router;