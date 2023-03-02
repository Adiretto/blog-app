const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
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

module.exports = mongoose.model("Category", CategorySchema);
