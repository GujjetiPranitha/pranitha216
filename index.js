var express=require('express')
var app=express()
app.get("/",(req,res)=>{
    res.send("hello user")
})
var server=app.listen(5001,function(){
    console.log("listening on port 5001")
})
module.exports=server