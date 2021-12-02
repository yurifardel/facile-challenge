// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      address : '127.0.0.1',
      port : 5432,
      user: 'postgres',
      password: 'Adolfo97',
      database: 'facile',
      dialect: "postgres",
      operatorsAliases: false,
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
  production: {
    dialect: "postgres",
    operatorsAliases: false
  }

}