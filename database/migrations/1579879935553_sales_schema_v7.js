'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalesSchema extends Schema {
  up () {
    this.create('sales', (table) => {
      table.string('name', 80).notNullable()
      table.float('price').notNullable()
      table.integer('quantity').unsigned().notNullable()
      table.integer('product').unsigned().notNullable()
      table.foreign('product').references('id').inTable('products');
      table.integer('company').unsigned().notNullable()
      table.foreign('company').references('id').inTable('companies');
      table.integer('client').unsigned().notNullable()
      table.foreign('client').references('id').inTable('clients');
      
      table.increments()
      table.integer('createdBy').unsigned().notNullable()
      table.foreign('createdBy').references('id').inTable('users');
      table.integer('updatedBy').unsigned()
      table.foreign('updatedBy').references('id').inTable('users');
      table.timestamps()
    })
  }

  down () {
    this.drop('sales')
  }
}

module.exports = SalesSchema
