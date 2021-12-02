// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host : 'localhost',
      port : 5432,
      user: 'postgres',
      password: 'Adolfo97',
      database: 'facile',
      idleTimeoutMillis: 30000
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

}