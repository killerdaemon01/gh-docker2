const express = require("express")
const app = express()

app.get("/",function(request,response){
    response.sendFile(__dirname+"/hello.html");
});

app.get("/contact",function(req,res){
    res.send("Contact me at so and so");
});

app.get("/about",function(req,res){
    res.send("Whatever about me!");
});

app.get("/hobbies", function(req,res){
    res.send("<ul><li>Something one</li><li>Something two</li><li>Something three</li><li>Something four</li></ul>")
});

app.get("/test",function(req,res){
    response.sendFile(__dirname+"/test.html");
});

app.listen(80, function()
{
    console.log("server started on port 80")
});