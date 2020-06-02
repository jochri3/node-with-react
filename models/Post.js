const mongoose = require('mongoose');

const Post = mongoose.model(
  'User',
  new mongoose.Schema(
    {
      titre: String,
      contenu: String,
    },
    {
      timestamps: true,
    }
  )
);

module.exports = Post;
