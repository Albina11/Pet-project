import PostModel from './Model.js'

class UsersDataAccesses {
  async getAllUsers()  {
    return await PostModel.find()
  }
}

export default UsersDataAccesses;