import chai from 'chai';
import foo from '../index.js';

const assert = chai.assert;

class Node {
	constructor( value ) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	add( value ) {
		if ( value < this.value ) {
			if ( !this.left ) {
				this.left = new Node( value );
			}
			else {
				this.left.add( value );
			}
		}
		else {
			if ( !this.right ) {
				this.right = new Node( value );
			}
			else {
				this.right.add( value );
			}
		}
	}

	list ( results ) {

		// add the ones the are "less than"
		if ( this.left ) {
			this.left.list( results );
		}

		// add this value
		results.push( this.value );

		// add the ones the are "more than"
		if ( this.right ) {
			this.right.list( results );
		}

	}
}

class TreeSorter {
	constructor ( values = [] ) {
		this.node = new Node( values[0] );
		values.forEach( ( value, i ) => {
			if ( !i ) return;
			this.node.add( value );
		});
	}

	add ( value ) {
		this.node.add( value );
	}

	list () {
		const results = [];
		this.node.list( results );
		return results;
	}
}

describe( 'binary sort tree', () => {

	describe( 'nodes', () => {
		const node = new Node( 'foo' );
		it ( 'node stores value', () => {
			assert.equal( node.value, 'foo' );
		});

		it ( 'node creates left and right node on add', () => {
			node.add( 'boo' );
			assert.equal( node.left.value, 'boo' );
			node.add( 'qux' );
			assert.equal( node.right.value, 'qux' );
		});

		it ( 'cascades nodes into existing nodes', () => {
			node.add( 'cat' );
			assert.equal( node.left.right.value, 'cat' );
			node.add( 'kite' );
			assert.equal( node.right.left.value, 'kite' );
		});
	});

	describe( 'tree sort', () => {

		const values = [ 'cat', 'qux', 'kite', 'zoo', 'foo', 'boo', 'lily' ];
		const tree = new TreeSorter( values );

		it ( 'sorts list', () => {
			assert.deepEqual( tree.list(), [ 'boo', 'cat', 'foo', 'kite', 'lily', 'qux', 'zoo' ] );
		});

		it ( 'can add more items to list', () => {
			tree.add( 'pony' );
			assert.deepEqual( tree.list(), [ 'boo', 'cat', 'foo', 'kite', 'lily', 'pony', 'qux', 'zoo' ] );
		});
	})

});
