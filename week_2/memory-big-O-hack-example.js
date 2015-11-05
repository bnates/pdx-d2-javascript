// quick hack to show memory big O
// not runnable as-is


// express requires
var path = require('path'),
	fs = require('fs');

app.get( '/image/:imageName', ( req, res ) => {
	const file = path.join( __dirname, 'images', req.params.imageName );

	fs.createReadStream( file ).pipe( res );

	// fs.readFile( file, ( err, data ) => {
	// 	if ( err ) //send error response

	// 	res.end(data);
	// });
});

let index;
fs.readFile( file, ( err, data ) => {
	if ( err ) //send error response

	index = data;
});

app.get( '/index.html', ( req, res ) => {
	res.write(index);


});
