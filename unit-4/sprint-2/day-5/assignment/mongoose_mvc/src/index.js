const express= require("express");

const connect= require("./configure/db");

const userController=require("./controllers/user.controller");
 const batchController=require("./controllers/batch.controller");
const evaluationController=require("./controllers/evaluation.controller");
 const studentController=require("./controllers/student.controller");
const submissionController=require("./controllers/submission.controller");


const app = express();
app.use(express.json());

app.use("/users",userController);
app.use("/batchs",batchController);
app.use("/evaluations",evaluationController);
app.use("/students",studentController);
app.use("/submissions",submissionController);

app.listen(3006, async function () {
  try {
    await connect();
    console.log("listening on port 3006");
  } catch (e) {
    console.log(e.message);
  }
});

