function Queue() {
	this.data = [];
}

Queue.prototype.enqueue = function( item ) {
	this.data.push( item );
};

Queue.prototype.dequeue = function() {
	return this.data.shift();
};

Queue.prototype.hasNext = function() {
	return !!this.data.length;
};

module.exports = Queue;
