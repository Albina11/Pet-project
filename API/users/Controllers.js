import UsersServices from "./Services.js";

const usersServices = new UsersServices()


class UsersController {
  async getAllUsers(req,res)  {
    try {
      const users = await usersServices.getAllUsers()
      res.json(users)
    } catch (error) {
      console.error(error.message);
    
      res.status(500).json({message: error.message})
    }
    
  }
}

export default UsersController;