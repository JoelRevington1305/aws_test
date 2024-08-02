const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

mongoose
  .connect(
    "mongodb+srv://joelrevington28:J7twu3o6dp8sVXY1@chat.5k70qtx.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((re) => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());

app.get("/test", () => {
  console.log("The Project is Running")
})

app.use(cors());

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});