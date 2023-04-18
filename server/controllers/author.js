const Author = require("../models/Author");

const getAuthorById = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Author.findOne({ _id: id });
    res.status(201).json({ success: true, author: author });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: error });
  }
};

module.exports = {
  getAuthorById,
};
