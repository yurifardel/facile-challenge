// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'facile',
      host : '127.0.0.1',
      port : 5432,
      user: 'postgres',
      password: '<password>',
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