var angular = require('angular');
var $resource = require('angular-resource');
var env = require('../env');

// also see http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/

module.exports = angular.module('services', [ env, $resource ] )
    .factory( 'Task', function ( API, $resource ){

        return $resource(API.hostUrl + 'Tasks/:id', { id: '@_id' }, {
        	update: {
                method: 'PUT',
                isArray: false
            },
        	removeCompleted: {
        		method: 'DELETE',
        		url: API.hostUrl + 'Tasks/0/completed',
        		isArray: false
        	}
        });

    })
    .name;
