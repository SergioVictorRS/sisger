'use strict'

const Client = use('App/Models/Client')
const AuthenticatedResourceController = use('App/Classes/AuthenticatedResourceController')

class ClientController extends AuthenticatedResourceController {

    constructor(){
        super();
        this.model = Client;
    }

}

module.exports = ClientController
