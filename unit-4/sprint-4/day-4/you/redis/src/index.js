const express = require("express");

const connect = require("./confige/db");

const postController= require("./controllers/post.controller");

const app = express();

app.use(express.json());

app.use("/posts",postController);


app.listen(3010, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 3010");
});
