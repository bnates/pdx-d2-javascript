var angular = require('angular');
var $resource = require('angular-resource');
var env = require('../env');

module.exports = angular.module('todo.services', [ $resource, env ] )
    .factory( 'TodoService', function ( API, $resource ){
        return $resource(API.hostUrl + 'Todos/:id', { id: '@_id' }, {
        	update: { method: 'PATCH', isArray: false },
        	removeCompleted: {
        		method: 'DELETE',
        		url: API.hostUrl + 'Todos/0/completed',
        		isArray: false
        	}
        });
    })
    .name;
