// Update with your config settings.
require("dotenv").config()

module.exports = {
  development: {
    client: process.env.DB_CLIENT,
    connection: {
      host : process.env.DB_HOST,
      port :  process.env.DB_PORT,
      user:  process.env.DB_USER,
      password:  process.env.DB_PASSWORD,
      database:  process.env.DB_DATABASE,
      dialect:  process.env.DB_DIALECT,
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
}