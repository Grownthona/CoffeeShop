const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');
const Post = require('../models/post');

var fs = require('fs');

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
// Set up multer file filter
const fileFilter = (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && extname) {
      return cb(null, extname);
    }
    cb(new Error('Only JPEG, JPG, and PNG files are allowed'));
  };

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

router.get('/images', async(req, res) => {
  const allData = await Post.find({})
  res.json(allData);
}
)

router.post('/add', upload.array('images'), async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = new Post({
      title,
      content,
      images: req.files.map((file) => ({
        data: fs.readFileSync(file.path),
        contentType: file.mimetype
      }))
      //images: req.files.map((file) => file.path),
    });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
