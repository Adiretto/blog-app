const express = require("express");
const { getAllCategories } = require("../controllers/category");
const router = express.Router();

router.route("/getAllCategories").get(getAllCategories);
module.exports = router;
