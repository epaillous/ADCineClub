var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Movie = require('../models/movie');

router.get('/:id(\\d+)/movies', function(req, res, next) {
  User.findById(req.params.id).then(function(user){
    user.movies().fetch().then(function(movies) {
      res.json(movies);
      });
  });
});

router.post('/:id(\\d+)/movies', function(req, res, next) {
  User.findById(req.params.id).then(function(user){
    var movie = req.body.movie;
    function attachMovieAndRespond(movie_found) {
      user.movies().attach(movie_found).then(function(movies){
        res.status = 201;
        res.json();
      })
      .catch(function(err){
        console.log("Error when trying to attach movie to user");
        console.log(err);
        return next(err);
      });
    }
    Movie.findOne({'mdb_id': movie.id}).then(function(movie_found){
      attachMovieAndRespond(movie_found);
    })
    .catch(function(err){
      // movie not found
      Movie.create({'mdb_id': movie.id, 'title': movie.title, 'poster_path': movie.poster_path})
      .then(function(movie_created){
        attachMovieAndRespond(movie_created);
      })
      .catch(function(err){
        console.log("Error when trying to create movie");
        console.log(err);
        return next(err);
      })
    });
  });
});


router.get('/:id(\\d+)/', function(req, res, next) {
  User.findById(function(err, user){
    if(err){ return next(err); }
    res.json(user);
  });
});

module.exports = router;