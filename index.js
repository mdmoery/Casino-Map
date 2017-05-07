var restify = require('restify');
var server = restify.createServer();
var port = 8088;

var casinos = require('./routes/casinos.js');
var client = require('./client');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/casinoMap');
var db = mongoose.connection;

db.on('error', function(msg){
	console.log('Mongoose connection error %s', msg);
});

db.once('open', function(){
	console.log('Mongoose connection established');
});

// Client
server.get('/', client.get);

// Server Responses
server.get('/casinos', casinos.get);          // lists all casinos


server.listen(port, function(){
	console.log('%s listening at %s', server.name, port);
});
