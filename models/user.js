'use strict';

var bookshelf = require('../db');
var ModelBase = require('bookshelf-modelbase')(bookshelf);
var Movie = require('./movie');

var User = ModelBase.extend({
  tableName: 'users',
  hasTimestamps: true,
  movies: function() {
    return this.belongsToMany(Movie, 'movies_users', 'user_id', 'movie_id');
  }
});

module.exports = User;
