var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

// app.get('/', function (req, res) {
//     res.sendFile('kitten.html');
// });

app.listen(3000, function() {
    console.log('listening on port 3000...  woohoo!');
});