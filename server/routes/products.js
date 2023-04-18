const router = require('express').Router();

let Product = require('../models/productmodel');

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

  

  router.route('/addproduct').post(async(req, res) => {
    //const {name,price,imageSrc,details,category} = req.body;
    const newProduct = new Product({
        name: 'Cappuccino',
        price: 10.99,
        imageSrc: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_913/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-07-Cappuccino%2FCappuccino-5',
        details: 'A cappuccino is an espresso-based coffee drink and is traditionally prepared with steamed milk foam. Variations of the drink involve the use of cream instead of milk, using non-dairy milk substitutes and flavoring with cinnamon or chocolate powder.',
        category: 'Coffee'
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