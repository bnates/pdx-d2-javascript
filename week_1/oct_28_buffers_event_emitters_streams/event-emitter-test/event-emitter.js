var events = require('events');
var eventEmitter = new events.EventEmitter();

var doSomething = function doSomething() {
    console.log('we just did something...');
}

eventEmitter.on('custom-event', doSomething);

eventEmitter.emit('custom-event');