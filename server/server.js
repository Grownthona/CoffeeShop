const express = require("express");
const mongoose = require('mongoose');

const cors = require("cors");
const app = express();

app.use(cors({
  origin:"http://localhost:3000",
}))
app.use(express.json());

const usersRouter = require('./routes/users');
    
app.use('/users', usersRouter);
mongoose
  .connect(
    'mongodb+srv://mongr:yw46DNwYWt4@cluster0.htcqlu9.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(result => {
    console.log("MongoDB database connection established successfully");
  })
  .catch(err => {
    console.log(err);
  });

app.get("/api",(req,res)=>{
  res.json({"users":["userOne","userTwo","userThree"]});
})
    
app.listen(5000,()=>{console.log("Server started on port 5000")})
