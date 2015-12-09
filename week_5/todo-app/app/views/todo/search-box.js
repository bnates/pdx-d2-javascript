var angular = require('angular');
var moment = require('moment');

module.exports = angular.module('todo.search-box', [])
	.directive('searchBox', [function() {
		return {
			templateUrl : 'views/todo/search-box.html',
			controllerAs : 'search',
			scope: {
				search: '='
			},
			controller : function() {
				//controller logic...
			}
	  	}
	}])
	.filter('moment', function() {
	  return function(date) {
	    return moment(date).fromNow();
	  };
	})
	.name;
