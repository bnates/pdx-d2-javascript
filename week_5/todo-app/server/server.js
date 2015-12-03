var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile('./public/index.html');
});

app.get('/tasks', function (req, res) {
	res.json([
        {
            description: 'foo server task description - task 1',
            done: false,
            created: new Date()
        },
        {
            description: 'bar server task description - task 2',
            done: true,
            created: new Date()
        }
    ]);
});

app.listen(3000, function() {
    console.log('listening on port 3000...');
});
