'use strict';

var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type' : 'text/plain'
    });
    res.write('Hello World!');
    res.end();
});

var someWord = 'some word';

server.listen(3000, function() {
    console.log('we are listening on port 3000...  yay!');
});
