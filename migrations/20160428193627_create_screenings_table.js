
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('screenings', function(table) {
          table.increments('id').primary();
          table.date('date');
          table.timestamps();
      }).createTable('screenings_users', function(table) {
        table.integer('screening_id').references('screenings.id');
        table.integer('user_id').references('users.id');
      }).createTable('screenings_movies', function(table) {
        table.integer('movie_id').references('movies.id');
        table.integer('screening_id').references('screenings.id');
      })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('screenings')
                   .dropTable('screenings_users')
                   .dropTable('screenings_movies')
    ])
};
