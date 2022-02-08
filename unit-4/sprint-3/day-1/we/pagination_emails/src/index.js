const express=require("express");

const connect = require("./configure/db");

const userController=require("./controllers/user.controller");


const app = express();

app.use(express.json());

app.use("/users",userController);


app.listen(3007, async () => {
    try{
        await connect();
        console.log("listening on port 3007");
    }catch(err){
      console.log(err.message);
    }
})