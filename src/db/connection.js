const knex = require('knex')
const config = require('../db/knexfile')

const connection = knex(config.development)
const production = knex(config.production)

module.exports = {connection, production}