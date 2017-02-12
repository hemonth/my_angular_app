"use strict";

var https = require("https");
var fs = require("fs");
var  express = require("express");
var app = express();

app.get("/", function(req,res) {
  res.send("hello hemonth!");
});

app.listen(8050, function(){
  console.log("Express server is running!!! at  port 8050");
});
