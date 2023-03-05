const express = require("express");
const {
  getAllPosts,
  getPostBySlug,
  getSortedPostsByCategory,
  postComment,
} = require("../controllers/post");
const router = express.Router();

router.route("/getAllPosts").get(getAllPosts);
router.route("/getPostBySlug/:slug").get(getPostBySlug);
router
  .route("/getSortedPostsByCategory/:categoryId")
  .get(getSortedPostsByCategory);
router.route("/postComment/:id").post(postComment);
module.exports = router;
