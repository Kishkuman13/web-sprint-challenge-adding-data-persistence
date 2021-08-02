
exports.up = function(knex) {
  return knex.schema.createTable('project_resources', tbl => {
    tbl.increments();
    tbl.bigint('project_id')
      .unsigned()
      .references('projects.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.bigint('resource_id')
      .unsigned()
      .references('resources.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project_resources');
};
