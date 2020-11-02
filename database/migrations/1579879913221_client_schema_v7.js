'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.string('firstName', 80).notNullable()
      table.string('lastName', 80).notNullable()
      table.integer('company').unsigned().notNullable()
      table.foreign('company').references('id').inTable('companies');

      table.increments()
      table.integer('createdBy').unsigned().notNullable()
      table.foreign('createdBy').references('id').inTable('users');
      table.integer('updatedBy').unsigned()
      table.foreign('updatedBy').references('id').inTable('users');
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientSchema
