const router = require('express').Router();

let User = require('../models/usermodel');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post(async(req,res) => {

   const {email ,password} = req.body;

   try{
      const user = await User.findOne({email});
      if(user){
        if(password === user.password){
          return res.status(201).json('Login Successful' );
        }else{
          return res.status(400).json('Please enter correct email and password' );
        }
      }
      else{
        return res.status(400).json('User doesnt exist' );
      }
   }catch(err){
    return res.status(400).json(err);
  }
})

router.route('/add').post(async(req, res) => {

  const email = req.body.email;
  const password = req.body. password;
  const username = req.body.username;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json('Email already exists' );
    }
    const newUser = new User({email,password,username});
  
    await newUser.save();
    return res.status(201).json('User created successfully' );
    //.then(() => res.json('User added!'))
    //.catch(err => res.status(400).json('Error: ' + err));
  } catch(err){
    return res.status(400).json(err);
  }
});

module.exports = router;