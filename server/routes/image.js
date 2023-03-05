const express = require("express");
const { getPostImage, getAuthorImage } = require("../controllers/image");
const router = express.Router();

router.route("/post/:imageId").get(getPostImage);
router.route("/author/:imageId").get(getAuthorImage);

module.exports = router;
