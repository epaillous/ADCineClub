'use strict';

var bookshelf = require('../db');
var ModelBase = require('bookshelf-modelbase')(bookshelf);

var Movie = ModelBase.extend({
  tableName: 'movies',
  hasTimestamps: true,
});

module.exports = Movie;