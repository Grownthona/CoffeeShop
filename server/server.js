const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");
const app = express();

dotenv.config()
const db = process.env.DATABASE
const PORT = process.env.PORT || 5000

app.use(cors({
  origin:"http://localhost:3000",
}))
app.use(express.json());
//app.use(express.static('public'));
app.use(express.static('uploads'));

const usersRouter = require('./routes/users');
const fileRouter = require('./routes/uploads');
const productRouter = require('./routes/products');
const multiimg = require('./routes/multipleimage');
const checkout = require('./routes/checkout');
    
app.use('/users', usersRouter);
app.use('/api/',fileRouter);
app.use('/products/',productRouter);
app.use('/multi',multiimg);
app.use('/checkout',checkout);
mongoose
  .connect(
    db
  )
  .then(result => {
    console.log("MongoDB database connection established successfully");
  })
  .catch(err => {
    console.log(err);
  });

 
  
/*
app.get("/api",(req,res)=>{
  res.json({"users":["userOne","userTwo","userThree"]});
})
*/
    
app.listen(PORT,()=>{console.log(`Server start at port no ${PORT}`)})
