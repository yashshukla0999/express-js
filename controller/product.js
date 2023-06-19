exports.adminGETData=(req,resp,next)=>{
    resp.sendFile(path.join(__dirname,"../","views","add-product.html"))
   }

exports.contactDATA = (req,resp,next)=>{
    resp.sendFile(path.join(__dirname,"../","views","booking.html"))
    console.log(req.body)
    
  
}