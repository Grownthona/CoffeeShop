const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  images: [
    {
      data: Buffer,
      contentType: String
    },
  ],
});

module.exports = mongoose.model('Post', postSchema);
