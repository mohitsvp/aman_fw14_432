const express = require("express");

const connect = require("./confige/db");

const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller");
const { register, login } = require("./controllers/auth.controller");

const app = express();

app.use(express.json());


const {body } =require("express-validator");
const User = require("./models/user.model");

// /register
app.post("/register",body("name").isLength({min:3,max:20}).withMessage("Please enter more than 3 char"),
body("email").isEmail()
.custom(async(value) => {
    const user = await User.findOne({email:value});
    if(user){
        throw new Error("Email already exists");
    }
    return true;
}),
body("password").isStrongPassword().withMessage("Please enter strong Password")
,register);
// .login
app.post("/login", login);

app.use("/users", userController);
app.use("/products", productController);

app.listen(3009, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 3009");
});
