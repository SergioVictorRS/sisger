'use strict'

const Product = use('App/Models/Product')
const AuthenticatedResourceController = use('App/Classes/AuthenticatedResourceController')

class ProductController extends AuthenticatedResourceController {

    constructor(){
        super();
        this.model = Product;
    }

}

module.exports = ProductController
