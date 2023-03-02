const express = require("express");
const connectDB = require("./db/connect");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

port = process.env.PORT || 5000;

//start server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
