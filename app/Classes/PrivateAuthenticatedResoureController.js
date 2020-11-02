'use strict'

class PrivateAuthenticatedResourceController{

  async index({request, auth}) {
    const data = request.only(['page'])
    return this.model.query().where("createdBy",auth.user.id).paginate(data.page, 5)
  }

  async one({params, auth, response }){
    const item = await this.model.findOrFail(params.id)
    if(item.createdBy !== auth.user.id){
      return response.status(401).send({ error: 'Not authorized' });
    } else {
      return item;
    }
  }

  async store({ request, auth }){
    return this.model.create({ ...request.all(), createdBy: auth.user.id });
  }

  async update({ params, request, auth, response }){
      let existentElement = await this.model.findOrFail(params.id);
      if(existentElement.createdBy !== auth.user.id){
        return response.status(401).send({ error: 'Not authorized' });
      }
      let data = request.all();
      existentElement.merge({ ...request.all(), updatedBy: auth.user.id })
      await existentElement.save();
      return existentElement;
  }

  async destroy({ params, request, auth, response }){
      let existentElement = await this.model.findOrFail(params.id);
      if(existentElement.createdBy !== auth.user.id){
        return response.status(401).send({ error: 'Not authorized' });
      }
      await existentElement.delete();
  }

}

module.exports = PrivateAuthenticatedResourceController
