const express = require("express");

const connect = require("./confige/db");

const userController = require("./controllers/user.controller");
const postController = require("./controllers/post.controller");
const postlikeController = require("./controllers/postlike.controller");

const app = express();
app.use(express.json());

app.use("/users",userController);
app.use("/posts",postController);
app.use("/postlike",postlikeController);

app.listen(3011,async function (){
    try{
        await connect();
        console.log("listening on port 3011");
    }catch(err){
        console.log(err.message);
    }
});