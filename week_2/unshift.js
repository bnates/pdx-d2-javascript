
function unshift( arr, item ) {
	for( var i = arr.length; i > 0; i-- ) {
		arr[ i ] = arr[ i - 1 ];
	}

	arr[0] = item;
}

const arr = [ 'a', 'b', 'c' ];

unshift( arr, 'd' );

console.log( arr );
