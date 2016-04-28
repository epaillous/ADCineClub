var express = require('express');
var router = express.Router();

var mdb = require('moviedb')('b0b2f356ce291037eef0936cd24034c3');

function image_path(poster_path) {
  return "http://image.tmdb.org/t/p/w500" + poster_path;
}

/* GET home page. */
router.get('/popular', function(req, res, next) {
    var page = (req.query["page"]) ? req.query["page"] : 1;
    mdb.miscPopularMovies({page: page}, function(err, data){
      data.results.map(function(obj) {
        obj.poster_path = image_path(obj.poster_path);
        obj.backdrop_path = image_path(obj.backdrop_path);
      });
        res.send(data);
    });
});

router.get('/search', function(req, res, next) {
    var page = (req.query["page"]) ? req.query["page"] : 1;
    mdb.searchMovie({query: req.query['q'], page: req.query['page']}, function(err, data){
      data.results.map(function(obj) {
        obj.poster_path = image_path(obj.poster_path);
        obj.backdrop_path = image_path(obj.backdrop_path);
      });
      res.send(data);
    });
});


router.get('/:id(\\d+)/', function(req, res, next) {
  mdb.movieInfo({id: req.params.id}, function(err, data){
    if (err) {
      next(err);
    } else {
      data.backdrop_path = image_path(data.backdrop_path);
      data.poster_path = image_path(data.poster_path);
      data.belongs_to_collection.poster_path = image_path(data.belongs_to_collection.poster_path);
      data.belongs_to_collection.backdrop_path = image_path(data.belongs_to_collection.backdrop_path);
      res.send(data);
    }
  });
});


module.exports = router;
