const express = require("express");
const connectDB = require("../db/connect");
const bodyParser = require("body-parser");
const postRouter = require("../routes/post");
const authorRouter = require("../routes/author");
const categoryRouter = require("../routes/category");
const imageRouter = require("../routes/image");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

//routes
app.use("/api/post", postRouter);
app.use("/api/author", authorRouter);
app.use("/api/category", categoryRouter);
app.use("/image", imageRouter);

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
