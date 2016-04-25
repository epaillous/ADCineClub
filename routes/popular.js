var express = require('express');
var router = express.Router();

var mdb = require('moviedb')('b0b2f356ce291037eef0936cd24034c3');

/* GET home page. */
router.get('/', function(req, res, next) {
    var page = (req.query["page"]) ? req.query["page"] : 1;
    mdb.miscPopularMovies({page: page}, function(err, data){
        res.send(data);
    });
});

module.exports = router;
