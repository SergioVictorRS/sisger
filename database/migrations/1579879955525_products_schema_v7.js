'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.string('name', 80).notNullable()
      table.integer('quantity').notNullable()
      table.integer('price').unsigned().notNullable()
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
    this.drop('products')
  }
}

module.exports = ProductsSchema
