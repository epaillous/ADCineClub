'use strict';

var bookshelf = require('../db');
var ModelBase = require('bookshelf-modelbase')(bookshelf);

var User = ModelBase.extend({
  tableName: 'users',
  hasTimestamps: true,
  movies: function() {
    return this.belongsToMany(Movie);
  }
});

module.exports = User;
