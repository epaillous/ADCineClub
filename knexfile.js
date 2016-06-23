module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'cineclub'
    }
  },

  production: {
    client: 'pg',
    connection: {
      db: process.env.DATABASE_URL + '?ssl=true'
    }
  }
}