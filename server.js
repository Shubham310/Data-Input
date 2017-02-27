var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');

var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/patient', function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('connected to mongodb');
    }
});

var users = require('./routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/users', users);
var User = require('./models/user');
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

//console.log(User);
server.listen(3000);

var io = require('socket.io').listen(server);

io.sockets.on('connection',function(socket){
	console.log('socket connected');
	User.find({},function(err, docs){
		if(err) throw err;

		socket.emit('load data', docs);
	});
})