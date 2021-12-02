const knex = require('knex')
const config = require('../db/knexfile')

const connection = knex(config.development)

module.exports = connection