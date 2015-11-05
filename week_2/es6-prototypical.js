
class A {
	constructor () {
		this.foo = 'foo';
	}

	eat ( food ) {

	}
}


class B extends A {
	constructor() {
		super();
		this.bar = 'bar';
	}

	sing ( song ) {

	}

	eat ( food ) {
		food.push( 'appetizer' );
		super.eat( food )
	}
}

var b = new B();
