const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

var fs = require('fs');

let imageModel = require('../models/image_model');

const storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, 'uploads');
  },
  limits: { fileSize: 9 * 1024 * 1024 },
  filename:(req, file, cb)=> {
    //const ext = path.extname(file.originalname);
    //cb(null, Date.now() + ext);
     cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage,
  fileFilter: function(req, file, cb) {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && extname) {
      return cb(null, extname);
    }
    cb(new Error('Only JPEG, JPG, and PNG files are allowed'));
  }
});
router.get('/images', async(req, res) => {
  const allData = await imageModel.find({})
  res.json(allData);
}
)
router.post('/upload', upload.single('testImage'), (req, res) => {
  //const filePath = req.file.path;
  //res.send(filePath);
    const filePath = req.file.filename;
    const saveImage = new imageModel({
    name: req.body.name,
    image : {
      data: fs.readFileSync('uploads/' + req.file.filename),
      contentType: req.file.mimetype
    }
  });
  saveImage.save()
    .then((res)=> {console.log('image is saved')})
    .catch((err)=> {console.log(err)})
});

module.exports = router;
