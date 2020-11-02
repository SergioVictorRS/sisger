'use strict'

const Company = use('App/Models/Company')
const AuthenticatedResourceController = use('App/Classes/AuthenticatedResourceController')

class CompanyController extends AuthenticatedResourceController {

    constructor(){
        super();
        this.model = Company;
    }

}

module.exports = CompanyController
