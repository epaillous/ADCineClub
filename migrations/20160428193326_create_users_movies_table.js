
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('movies_users', function(table) {
        table.integer('user_id').references('users.id');
        table.integer('movie_id').references('movies.id');
      })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('movies_users')
    ])
};
