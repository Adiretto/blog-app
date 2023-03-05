const express = require("express");
const { getAuthorById } = require("../controllers/author");
const router = express.Router();

router.route("/getAuthorById/:id").get(getAuthorById);

module.exports = router;
