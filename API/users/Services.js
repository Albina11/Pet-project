import UsersDataAccesses from './DataAccesses.js';

const usersDataAccesses = new UsersDataAccesses();

class UsersServices {
  async getAllUsers()  {
    return await usersDataAccesses.getAllUsers()
  }
}

export default UsersServices;