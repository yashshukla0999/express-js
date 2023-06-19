const express = require("express");
const router =express.Router();
const path = require('path');
const productData= require('../controller/product')

router.get('/add-product',productData.adminGETData)
router.post('/add-product',(req,resp)=>{
    console.log(req.body);
    resp.redirect('/');
})

module.exports= router