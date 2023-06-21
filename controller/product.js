const path =require('path')
const rooDir = require('../util/path')


exports.contactDetails=(req,resp,next)=>{
    resp.sendFile(path.join(rooDir,"views","booking.html"))
    console.log(__dirname);
    console.log(req.body)
    
  
}
exports.formDetails=(req,resp)=>{
    
    resp.sendFile(path.join(rooDir,"views","formSubmit.html"))
}
