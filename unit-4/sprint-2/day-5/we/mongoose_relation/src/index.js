const express = require("express");
const connect=require("./configure/db");

const userController=require("./controllers/user.controller");
const postController=require("./controllers/post.controller");
const commentController=require("./controllers/comment.controller");
const tagController=require("./controllers/tag.controller");

const app = express();
app.use(express.json());

app.use("/users",userController);
app.use("/posts",postController);
app.use("/comments",commentController);
app.use("/tags",tagController);

app.listen(3005, async function () {
  try {
    await connect();
    console.log("listening on port 3005");
  } catch (e) {
    console.log(e.message);
  }
});


