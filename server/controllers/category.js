const Category = require("../models/Category");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(201).json({ success: true, categories: categories });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: error });
  }
};
module.exports = {
  getAllCategories,
};
