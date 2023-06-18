const express = require('express')
const router = express.Router();
router.use('/',(req,resp)=>{
    resp.send("<h1>Page Not Found</h1>")
 })


module.exports = router;