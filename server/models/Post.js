const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  excerpt: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  author_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    trim: true,
  },

  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    trim: true,
    ref: "Category",
  },
  comment: [
    {
      name: String,
      email: String,
      content: String,
      createdAt: {
        type: Date,
        required: true,
        trim: true,
      },
    },
  ],
});

module.exports = mongoose.model("Post", PostSchema, "Post");
