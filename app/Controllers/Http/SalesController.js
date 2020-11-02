'use strict'

const Sales = use('App/Models/Sales')
const AuthenticatedResourceController = use('App/Classes/AuthenticatedResourceController')

class SalesController extends AuthenticatedResourceController {

    constructor(){
        super();
        this.model = Sales;
    }

}

module.exports = SalesController
