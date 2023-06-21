const express=require('express');
const path =require('path')
const router = express.Router();
const rooDir = require('../util/path')
const controllerContact = require('../controller/product')


router.use('/contact-us' ,controllerContact.contactDetails)
module.exports = router;