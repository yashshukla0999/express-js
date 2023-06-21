const express= require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const adminRouter=require('./routes/admin')
const shopRouter = require('./routes/shop')
const contactRouter = require('./routes/contact')
const form = require('./routes/form')




app.use(bodyParser.urlencoded({extended:true}));
app.use(adminRouter);
app.use(shopRouter);


app.use(contactRouter)

  
app.use(form);
app.use('/',(req,resp)=>{
    resp.sendFile(path.join(__dirname,"views","error.html"));
 })

app.listen(3000);




















// const express= require('express');
// const bodyParser = require('body-parser');
// const app = express();



// app.use(bodyParser.urlencoded({extended:false}));
// app.use('/add-product',(req,resp,next)=>{
//  resp.send('<form action ="/product" method="POST"><input type="text" placeholder ="enter a name" name="target"/><input type="number" placeholder ="enter a value" name="target"/> <button>click me</button> </form>')
// })
// app.use('/product',(req,resp)=>{
//     console.log(req.body);
//     resp.redirect('/');
// })
// app.use('/',(req,resp,next)=>{
//     resp.send("product Shukla");
   
// })
// app.listen(4000);


















// const express = require("express");
// const bodyParser = require("body-parser");

// const app =express();
// app.use(bodyParser.urlencoded({extended:false}));
// app.use('/add-product',(req,res,next)=>{
//     res.send('<html><body><form action="/product" method="POST"><input type="text" name="title"><button type ="submit">add me</button></form><body><html>')
// });
// app.use('/product',(req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/')

// });
// app.use('/',(req,res,next)=>{
//     res.send('<h1>Hello from express js</h1>')
// });
// app.listen(4500);