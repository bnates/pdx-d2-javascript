'use strict';

const assert = require( 'chai' ).assert;
const Queue = require( '../Queue' );

describe( 'stack', () => {

	it( 'reverse', () => {
		const arr = [ 12, 0, 5, 6 ];

		function reverse( toBeReversed ) {
			const reversed = [];

			let popped;

			while( popped = toBeReversed.pop(), popped != null ) {
				reversed.push( popped );
			}

			//do stuff with only .pop, .push ( and .length )

			return reversed;
		}

		assert.deepEqual(
			reverse( arr ),
			[ 6, 5, 0, 12 ]
		);
	});

	it( 'Queue', () => {
		const queue = new Queue();

		assert.notOk( queue.hasNext() );

		queue.enqueue(3);
		assert.ok( queue.hasNext() );
		queue.enqueue(6);
		queue.enqueue(9);

		assert.equal( queue.dequeue(), 3 );
		assert.equal( queue.dequeue(), 6 );
		assert.ok( queue.hasNext() );
		assert.equal( queue.dequeue(), 9 );

		assert.notOk( queue.hasNext() );
	});

});
