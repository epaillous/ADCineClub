var express = require('express');
var router = express.Router();

var mdb = require('moviedb')('b0b2f356ce291037eef0936cd24034c3');

/* GET home page. */
router.get('/popular', function(req, res, next) {
    var page = (req.query["page"]) ? req.query["page"] : 1;
    console.log(page);
    mdb.miscPopularMovies({page: page}, function(err, data){
        res.send(data);
    });
});

router.get('/:id', function(req, res, next) {
  mdb.movieInfo({id: req.params.id}, function(err, data){
  res.send(data);
  });
});

module.exports = router;
