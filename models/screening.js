'use strict';

var bookshelf = require('../db');
var ModelBase = require('bookshelf-modelbase')(bookshelf);

var Screening = ModelBase.extend({
  tableName: 'screenings',
  hasTimestamps: true,
  movies: function() {
    return this.belongsToMany(Movie);
  }
});

module.exports = Screening;
