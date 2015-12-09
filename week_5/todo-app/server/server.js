
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

var Task = require('./models/Task');
var uri = restify.serve(router, Task);

router.delete(uri + '/0/completed', function (req, res, next) {
	Task.remove({done: true}).then(function(removed){
		res.json({ removed: removed.result.n });
	});
})

app.use(router);

app.get('/', function (req, res) {
    res.sendFile('./public/index.html');
});

app.listen(3000, function() {
    console.log('listening on port 3000...');
});

