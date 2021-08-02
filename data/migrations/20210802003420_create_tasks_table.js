
exports.up = function(knex) {
  return knex.schema.createTable('tasks', tbl => {
    tbl.increments();
    tbl.string('task_description').notNullable();
    tbl.string('task_notes');
    tbl.integer('task_completed').defaultTo(false);
    tbl.bigint('project_id')
      .unsigned()
      .references('projects.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks');
};
