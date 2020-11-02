'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const WorkGroup = use('App/Models/WorkGroups')

class DatabaseSeeder {
  async run () {
    for(let i = 0; i < 10; i++){
      await this.seedWorkGroup();
    }

    return true;
  }

  async seedWorkGroup(){
    return await WorkGroup.create({
      name: "Arduino",
      description: "Grupo de trabalho de projetos relacionados ao microcontrolador Arduino.",
      unit: "PDVT - IFPE",
      created_in: +(new Date()),
      created_by: "Gabriel Vanderlei",
      modificated_in: +(new Date()),
      modificated_by: "Gabriel Vanderlei"
    })
  }
}

module.exports = DatabaseSeeder
