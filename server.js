console.log("hellohohohooho wooooorld");


var express = require('express');


// app = application
var app = express();

  var server = app.listen(3000);
var port = process.env.PORT || 3000
//var server = app.listen(port);


app.use(express.static('public'));
