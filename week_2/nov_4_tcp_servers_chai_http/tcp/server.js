var net = require('net');

var server = net.createServer(function (socket) {
    socket.on('data', function (data) {
        console.log('===== Connection Started =====');
        console.log(data.toString());
    });
    socket.on('end', function() {
        console.log('***** Connection Ended *****');
    });
});

server.listen(3000);