var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose = require('mongoose'),
    restify = require('express-restify-mongoose'),
    Task = require('./models/Task');

var app = express();

app.use( ( req, res, next ) => {
	const url = '*';
	res.header( 'Access-Control-Allow-Origin', url );
	res.header( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, PATCH, DELETE' );
	res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
	next();
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(methodOverride());


mongoose.connect('mongodb://localhost/todo');
var router = express.Router();
var uri = restify.serve(router, Task);

router.delete( uri + '/0/completed', function(req, res){
	Task.remove({ done: true }).then(function(result){
		res.json({ removed: result.result.n });
	})
});

app.use(router);

app.listen(3000, function() {
    console.log('listening on port 3000...');
});
