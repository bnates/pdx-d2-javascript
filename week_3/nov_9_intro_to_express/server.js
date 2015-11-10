var express = require('express'),
    app = express();

var mainRouter = require(__dirname + '/lib/my_router.js');

app.use('/api', mainRouter);

app.listen(3000, function() {
    console.log('listening on port 3000...');
});

app.listen(3000);