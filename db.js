var config      = require('./knexfile.js');
var env         = 'development';
var knex        = require('knex')(config[env]);
var bookshelf   = require('bookshelf')(knex);

knex.migrate.latest([config]);

module.exports = bookshelf;