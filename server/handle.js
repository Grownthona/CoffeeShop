const handle = (req,res) =>{
    console.log(req.app.locals.title);
    res.send('This is handle page');
}
module.exports = handle;