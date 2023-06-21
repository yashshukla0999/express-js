const express = require("express");
const path = require('path');
const router =express.Router();
const rooDir = require('../util/path')

router.get('/add-product',(req,resp,next)=>{
    resp.sendFile(path.join(rooDir,"views","add-product.html"))
   })
router.post('/add-product',(req,resp)=>{
    console.log(req.body);
    resp.redirect('/');
})

module.exports= router