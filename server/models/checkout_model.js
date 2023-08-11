const mongoose = require('mongoose');


const CheckoutSchema = new mongoose.Schema({
  totalPurchasePrice: { type: Number},
  purchaseDate: { type: Date},
  userId: { type: Number},
  productItems: [
    {
      name: String,
      quantity:  Number ,
      price: Number ,
      category: String,
    },
  ],
});

const Checkout = mongoose.model('Checkout', CheckoutSchema);

module.exports = Checkout;

