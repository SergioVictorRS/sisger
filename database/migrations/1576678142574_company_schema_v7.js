'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompanySchema extends Schema {
  up () {
    this.create('companies', (table) => {
      table.string('fantasyName', 80).notNullable()
      table.string('cep', 8).notNullable()
      table.string('street', 80).notNullable()
      table.string('district', 80).notNullable()
      table.string('city', 80).notNullable()
      table.string('state', 2).notNullable()
      table.string('country', 2).notNullable()

      table.increments()
      table.integer('createdBy').unsigned().notNullable()
      table.foreign('createdBy').references('id').inTable('users');
      table.integer('updatedBy').unsigned()
      table.foreign('updatedBy').references('id').inTable('users');
      table.timestamps()

    })
  }

  down () {
    this.drop('companies')
  }
}

module.exports = CompanySchema
