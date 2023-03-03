const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
    required: true,
    trim: true,
  },
  post_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Post",
      trim: true,
    },
  ],
});

module.exports = mongoose.model("Author", AuthorSchema, "Author");
