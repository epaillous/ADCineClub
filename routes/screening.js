var express = require('express');
var router = express.Router();
var Screening = require('../models/screening');

/* GET home page. */
router.get('/', function(req, res, next) {
 Screening.findAll().then(function(screenings) {
   res.json(screenings);
 });
});


module.exports = router;