
exports.up = function(knex) {
  return knex.schema.createTable("facile", function (table) {
    table.increments('id')
    table.string("encripted_name").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("facile");
};
