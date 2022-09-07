//const { describe, default: test } = require('node:test')
var server=require('./index.js')
var request=require("request")

describe("server test",function(){
    test("get response",()=>{
request.get("http://localhost:5001",function(err,res,body){
    expect(res.statusCode).toBe(200)
    //statusCode 200 means success
    server.close()
})

//to close the server once test case is over
    })
    
})