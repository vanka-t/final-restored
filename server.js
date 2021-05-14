console.log("hellohohohooho wooooorld");


var express = require('express');


// app = application
var app = express(); //creating express app

  var server = app.listen(3000);
var port = process.env.PORT || 3000 //linking to local port
//var server = app.listen(port);


app.use(express.static('public')); //to use public folder

var socket = require('socket.io');

var io = socket(server); //variable keeping track of inputs/outputs
io.sockets.on('connection',newConnection);

function newConnection(socket){ //callback
    console.log(socket);
   
    socket.on('startGame', gameMsg);

    function gameMsg(data){
        //  console.log(data);
        socket.broadcast.emit('startGame', data);
        }

}   
