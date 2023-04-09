const router = require('express').Router();

let User = require('../models/usermodel');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async(req, res) => {

  const email = req.body.email;
  const password = req.body. password;
  const username = req.body.username;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    const newUser = new User({email,password,username});
  
    await newUser.save();
    return res.status(201).json({ message: 'User created successfully' });
    //.then(() => res.json('User added!'))
    //.catch(err => res.status(400).json('Error: ' + err));
  } catch(err){
    return res.status(400).json({ message: err });
  }
});

module.exports = router;