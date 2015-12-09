
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var restify = require('express-restify-mongoose');
var app = express();
var router = express.Router();

app.use(bodyParser.json());
app.use(methodOverride());

app.use( ( req, res, next ) => {
	const url = '*';
	res.header( 'Access-Control-Allow-Origin', url );
	res.header( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, PATCH, DELETE' );
	res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
	next();
});

app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/todoapp');

var Todo = require('./models/Todo');
restify.serve(router, Todo);
app.use(router);

app.get('/', function (req, res) {
    res.sendFile('./public/index.html');
});

app.listen(3000, function() {
    console.log('listening on port 3000...');
});

