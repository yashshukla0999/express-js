const express = require('express');
const path = require('path');
const rooDir = require('../util/path')

const router = express.Router();
const details =require('../controller/product')


router.use('/success',details.formDetails)

module.exports=router;