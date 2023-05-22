const router = require('express').Router();

const multer = require('multer');
const path = require('path');
var fs = require('fs');

let Product = require('../models/productmodel');
const CartItem = require('../models/cartItem');

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


router.route('/').get(async(req, res) => {
    await Product.find({'products.category': 'coffee'})
      .then(data => res.json(data))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.get('/productsdetail/:id', async(req, res) => {
    // Retrieve the product details from the database based on the ID
    const productId = req.params.id;
    try {
      const product = await Product.findById(productId);
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
    });

    router.route('/addcart').post(async (req, res) => {
      const { productId, quantity } = req.body;
    
      try {
        const cartItem = new CartItem({
          productId,
          quantity
        });
        await cartItem.save();
        return res.status(201).send(cartItem);
      } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
      }
    });

  

  router.route('/addproduct').post(upload.single('testImage'),async(req, res) => {
    //const {name,price,imageSrc,details,category} = req.body;
    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        imageSrc: {
          data: fs.readFileSync('uploads/' + req.file.filename),
          contentType: req.file.mimetype
        },
        details: req.body.details,
        category: req.body.category
      });
      newProduct.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Product saved to database');
        }
      });
  });

module.exports = router;