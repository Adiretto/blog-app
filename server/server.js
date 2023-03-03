const express = require("express");
const connectDB = require("./db/connect");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
app.use(bodyParser.json());

app.get("/images/post/:imageId", (req, res) => {
  const { imageId } = req.params;
  const url = path.join(__dirname, `/images/post/${imageId}`);
  res.sendFile(url);
});
app.get("/images/author/:imageId", (req, res) => {
  const { imageId } = req.params;
  const url = path.join(__dirname, `/images/author/${imageId}`);
  res.sendFile(url);
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
