
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
        table.increments();
        table.text('name')
            .notNullable();
        table.text('description');
        table.boolean('completed')
            .defaultTo('false');
    })
    .createTable('tasks', table => {
        table.increments();
        table.text('description')
            .notNullable();
        table.text('notes');
        table.boolean('completed')
            .defaultTo('false');
        table.integer('projectId')
            .notNullable()
            .references('projects.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('resources', table => {
        table.increments();
        table.text('name')
            .notNullable();
        table.text('description')
    })
    .createTable('projectResources', table => {
        table.integer('resourceId')
            .notNullable()
            .references('resources.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.integer('projectId')
            .notNullable()
            .references('projects.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.primary(['resourceId', 'projectId']);
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projectResources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects');
};
