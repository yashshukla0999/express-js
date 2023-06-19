const express=require('express');
const path = require('path');
const router = express.Router();
const contact = require('../controller/product')

router.use('/contact-us' ,contact.contactDATA,)
module.exports=router;