'use strict'

class ResourceController{

    async index({ request, auth }){
        const data = request.only(['page'])
        return this.model.query().where("createdBy", auth.user.id).paginate(data.page, 5)
    }

    async one({params}){
        return this.model.findOrFail(params.id)
    }

    async store({ request, auth }){
        const data = request.all();
        await this.model.create({ ...request.all(), createdBy: auth.user.id });
        return {message: 'Deu'};
    }

    async update({ params, request, auth }){
        let existentElement = await this.model.findOrFail(params.id);
        let data = request.all();
        existentElement.merge({ ...request.all(), updatedBy: auth.user.id })
        await existentElement.save();
        return existentElement;
    }

    async destroy({ params, request, auth }){
        let existentElement = await this.model.findOrFail(params.id)
        await existentElement.delete();
    }

}

module.exports = ResourceController
