var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/users/:id(\\d+)/', function(req, res, next) {
  User.findById(function(err, user){
    if(err){ return next(err); }

    res.json(user);
  });
});

module.exports = router;