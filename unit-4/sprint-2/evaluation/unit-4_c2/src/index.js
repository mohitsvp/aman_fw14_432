const express=require("express");

const connect = require("./configure/db");

const userController=require("./controllers/user.controller");
const branchController=require("./controllers/branch.controller");
const masterController=require("./controllers/master.controller");
const savingsController=require("./controllers/savings.controller");
const fixedController=require("./controllers/fixed.controller");

const app = express();

app.use(express.json());

app.use("/users",userController);
app.use("/branchs",branchController);
app.use("/masters",masterController);
app.use("/savings",savingsController);
app.use("/fixeds",fixedController);

app.listen(3006, async () => {
    try{
        await connect();
        console.log("listening on port 3006");
    }catch(err){
      console.log(err.message);
    }
})