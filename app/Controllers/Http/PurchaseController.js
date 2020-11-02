'use strict'

const Purchase = use('App/Models/Purchase')
const AuthenticatedResourceController = use('App/Classes/AuthenticatedResourceController')

class PurchaseController extends AuthenticatedResourceController {

    constructor(){
        super();
        this.model = Purchase;
    }

}

module.exports = PurchaseController
