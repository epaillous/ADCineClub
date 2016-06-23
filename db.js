var config      = require('./knexfile.js');
var env         = process.env.NODE_ENV || 'development';
var knex        = require('knex')(config[env]);
var bookshelf   = require('bookshelf')(knex);

knex.migrate.latest([config]);

module.exports = bookshelf;