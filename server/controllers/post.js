const Post = require("../models/Post");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(201).json({ success: true, posts: posts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: error });
  }
};

const getPostBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const post = await Post.find({ slug: slug });
    res.status(201).json({ success: true, post: post });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: error });
  }
};

const getSortedPostsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const posts = await Post.find({ category_id: categoryId });
    res.status(201).json({ success: true, posts: posts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: error });
  }
};

const postComment = async (req, res) => {
  try {
    const { name, email, content } = req.body;
    const { id } = req.params;
    const comment = await Post.updateOne(
      { _id: id },
      {
        $push: { comment: { name: name, email: email, content: content } },
      }
    );
    res.status(201).json({ success: true, comment: comment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: error });
  }
};
module.exports = {
  getAllPosts,
  getPostBySlug,
  getSortedPostsByCategory,
  postComment,
};
