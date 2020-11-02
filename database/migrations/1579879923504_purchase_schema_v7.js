'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PurchaseSchema extends Schema {
  up () {
    this.create('purchases', (table) => {
      table.string('name', 80).notNullable()
      table.integer('quantity').notNullable()
      table.float('price').notNullable()
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
    this.drop('purchases')
  }
}

module.exports = PurchaseSchema
