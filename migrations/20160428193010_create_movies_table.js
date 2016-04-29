
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('movies', function(table) {
          table.increments('id').primary();
          table.integer('mdb_id');
          table.string('title');
          table.string('poster_path');
          table.timestamps();
      })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('movies')
    ])
};
