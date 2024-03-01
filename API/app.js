import express from "express";
import cors from 'cors'
import usersRouter from "./users/routes.js";

const app = express()

app.use(cors())
app.use(express.json());

app.use('/api/users', usersRouter)


app.get('/', (req, res) => {
  res.send('WORK')
})

export default app;