const router = require('express').Router();

let Checkout = require('../models/checkout_model');
router.route('/addcheckout').post(async (req, res) => {
    const {totalPurchasePrice,productItems} = req.body;

   
    try {
      const newCheckout = new Checkout({
        totalPurchasePrice,
        purchaseDate: new Date(),
        userId: '123456', // Replace with actual user ID
        productItems: productItems.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            category: item.category
          }))
      });
      await newCheckout.save();
      return res.status(201).json({ message: 'Checkout data saved successfully' });
      
      //return res.status(201).send(cartItem);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
    //console.log(totalPurchasePrice,productItems);
  });

module.exports = router;