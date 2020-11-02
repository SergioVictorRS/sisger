'use strict'

const User = use('App/Models/User')

class UserController {

    async login ({ auth, request }) {
        const { email, password } = request.all()
        return await auth.attempt(email, password)
    }

    async logout ({auth}){
        return await auth.logout()
    }

    // creating and saving a new user (sign-up)
    async store ({ auth, request, response }) {
        try {
            // getting data passed within the request
            const data = request.only(['username', 'email', 'password'])
            
            // looking for user in database
            const emailExists = await User.findBy('email', data.email)

            // if user exists don't save
            if (emailExists) {
                return response
                .status(400)
                .send([{ message: 'E-mail já cadastrado' }])
            }

            // looking for user in database
            const userExists = await User.findBy('username', data.username)

            // if user exists don't save
            if (userExists) {
                return response
                .status(400)
                .send([{ message: 'Usuário já cadastrado' }])
            }

            // if user doesn't exist, proceeds with saving him in DB
            const user = await User.create(data)
            
            if(user){
                return await auth.attempt(
                    data.email, 
                    data.password
                );
            } else {
                return response
                .status(400)
                .send([{ message: 'Erro ao criar o usuário.' }])
            }
            
        } catch (err) {
            return response
                .status(err.status)
                .send(err)
        }
    }

    show ({ auth, params }) {
      if (auth.user.id !== Number(params.id)) {
        return 'You cannot see someone else\'s profile'
      }
      return auth.user
    }

    profile({ auth }){
        return auth.user
    }
}

module.exports = UserController
