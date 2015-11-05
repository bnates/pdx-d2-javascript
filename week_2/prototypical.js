
function A() {
	// "super class"
	this.foo = 'foo';
}

A.prototype.eat = function(food){};

function B() {
	A.call(this);
	this.bar = 'bar';
}

const proto = Object.create( A.prototype );
B.prototype = proto;
B.prototype.constructor = B;

B.prototype.sing = function(song){};

var b = new B();
