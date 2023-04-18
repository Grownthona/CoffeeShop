const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    
    image: { data: Buffer,contentType: String }
  });
  
  const Product = mongoose.model('imageModel', ImageSchema);
  
  module.exports = Product;
  