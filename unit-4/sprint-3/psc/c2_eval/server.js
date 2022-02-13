const express = require("express");
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")
const bankRoutes = require("./routes/bankRoutes")

const app = express();
app.use(express.json());

app.use("/user", userRoutes )

app.use("/bank", bankRoutes)


app.listen(5000, () => {
    connectDB();
    console.log("listening on 5000")
})