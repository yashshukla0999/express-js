const express = require("express");
const router =express.Router();

router.get('/add-product',(req,resp,next)=>{
 resp.send('<form action ="/admin/add-product" method="POST"><input type="text" placeholder ="enter a name" name="target"/><input type="number" placeholder ="enter a value" name="target"/> <button>click me</button> </form>')
})
router.post('/add-product',(req,resp)=>{
    console.log(req.body);
    resp.redirect('/');
})

module.exports= router