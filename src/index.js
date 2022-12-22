//=======================----------------->{ Imports }<-------------=======================================//

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./routes/route");
const app = express();

app.use(bodyParser.json());

//=======================----------------->{ Connection to MongoDB }<-------------=======================================//

mongoose.set('strictQuery', true)

mongoose
  .connect(
    "mongodb+srv://Birappa:MangoDB@cluster0.m5phg.mongodb.net/interviewAssignment",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDB is Connected ..."))
  .catch((err) => console.log(err));
/*----------------------------------------------------------------------------------------------------------------------------*/

app.use("/", route);

//=======================----------------->{ Connection to Express on Port }<-------------=======================================//

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on Port-->{ " + (process.env.PORT || 3000) + " }");
});


/***********+++++*********+++++++++**********+++++++***********++++++++*******+++++++++*********++++++***********/   