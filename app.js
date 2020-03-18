require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res){
    res.render("auth");
  });
app.get("/reset-pass",(req,res)=>{
  res.render("reset-pass");
});
app.post("/otp",(req,res)=>{
  var generatedOtp=4114;
  var userOtp=parseInt(req.body.otp);
  res.render("otp",{generatedOtp:4114,userOtp:userOtp });
});

app.listen(3000, function() {
    console.log("Server started on port 3000.");
  });