import express from "express";
import UsersController from "./controllers.js";

const usersController = new UsersController()

const usersRouter = express.Router()

usersRouter.get('/', usersController.getAllUsers)

export default usersRouter;