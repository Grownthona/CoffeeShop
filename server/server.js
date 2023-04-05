const express = require("express");
const app = express();
//var admin = express() // the sub app
//const handle = require('./handle');
//app.use(express.urlencoded());

/*app.locals.title = 'MyApp';
app.get('/',handle);
app.get("/api",(req,res)=>{
    console.log(app.locals.title);
    res.json({"users":["userOne","userTwo","userThree"]})
})
app.post('/',(req,res) =>{
    console.log(req.body);
    res.send('This is home page with post request');
})
*/

/*
                                mounting

 admin.get('/', (req, res)=>{
    console.log(admin.mountpath) // /admin
    res.send('Admin Homepage')
  })
  app.get('/',(req,res)=>{
    res.send('User Homepage')
  })
  app.use('/admin', admin) // mount the sub app
  */

app.listen(5000,()=>{console.log("Server started on port 5000")})
