// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'facile',
      user:     'postgres',
      password: 'Adolfo97',
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