var angular = require('angular');

// also see http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/

module.exports = angular.module('service', [
		require('angular-resource'),
		require('../env')
	])
	.factory('Task', function($resource, API){
		return $resource(API.hostUrl + '/Tasks/:id', {
			id: '@_id'
		}, {
			update: {
				method: 'PUT',
				isArray: false },
			removeCompleted: {
				method: 'DELETE',
				url: API.hostUrl + '/Tasks/0/completed',
				isArray: false
			}
		});
	})
	.name;
