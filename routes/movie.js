var express = require('express');
var router = express.Router();

var mdb = require('moviedb')('b0b2f356ce291037eef0936cd24034c3');

/* GET home page. */
router.get('/popular', function(req, res, next) {
    var page = (req.query["page"]) ? req.query["page"] : 1;
    mdb.miscPopularMovies({page: page}, function(err, data){
        res.send(data);
    });
});

router.get('/search', function(req, res, next) {
    var page = (req.query["page"]) ? req.query["page"] : 1;
    mdb.searchMovie({query: req.query['q'], page: req.query['page']}, function(err, data){
      res.send(data);
    });
});


router.get('/:id(\\d+)/', function(req, res, next) {
  mdb.movieInfo({id: req.params.id}, function(err, data){
    if (err) {
      next(err);
    } else {
      res.send(data);
    }
  });
});


module.exports = router;
