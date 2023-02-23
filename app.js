const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieparser = require("cookie-parser");
const path = require("path");
const app = express();

dotenv.config({path:'./config.env'});
require("./db/conn");

app.use(express.json());
app.use(cookieparser());

app.use(require("./router/auth"));
const PORT = process.env.PORT || 5000;

//Static Files
app.use(express.static(path.join(__dirname,"./server/client/build")))

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./server/client/build/index.html'))
})


// app.get("/contact",function (req, res){
//     res.send("Contact Page");
// });
// app.get("/signin",function (req, res){
//     res.send("Sign In Page");
// });
// app.get("/signup",function (req, res){
//     res.send("Sign Up Page");
// });



app.listen(PORT,function(){
    console.log("Server Start Running on Port " + PORT);
})