const path = require("path");
const getPostImage = (req, res) => {
  const { imageId } = req.params;
  console.log(__dirname);
  const url = path.join(__dirname, `../images/post/${imageId}.jpg`);
  res.sendFile(url);
};
const getAuthorImage = (req, res) => {
  const { imageId } = req.params;
  const url = path.join(__dirname, `../images/author/${imageId}.jpg`);
  res.sendFile(url);
};
module.exports = {
  getPostImage,
  getAuthorImage,
};
