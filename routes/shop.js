const express=require('express');
const router = express.Router();



router.get('/',(req,resp,next)=>{
    resp.send("product details");
   
})

module.exports=router