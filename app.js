const express = require('express');
const app = express();
app.use((req,res,next)=>{
    console.log('middelware 1')
    next();
})
app.use((req,res,next)=>{
    console.log('middelware 2')
    res.send("<h1>milddelware 2</h1>")
    
})
app.listen(3000);