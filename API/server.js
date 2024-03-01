import 'dotenv/config';
import  app  from "./app.js";
import mongoose from "mongoose";



const server = async () => {
  await mongoose.connect(process.env.MONGO_DB)
  console.log("Connected to MongoDB");

  app.listen(process.env.PORT, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`listen localhost:${process.env.PORT}`);
  })


}

server();