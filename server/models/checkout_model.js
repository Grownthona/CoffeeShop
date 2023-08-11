const mongoose = require('mongoose');

const CartProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

const CheckoutSchema = new mongoose.Schema({
  totalPurchasePrice: { type: Number, required: true },
  purchaseDate: { type: Date, required: true },
  userId: { type: Number, required: true },
  productItems: [CartProductSchema],
});

const Checkout = mongoose.model('Checkout', CheckoutSchema);

module.exports = Checkout;

