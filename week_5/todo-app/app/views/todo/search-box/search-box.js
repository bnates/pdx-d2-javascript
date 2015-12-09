var angular = require('angular');
require('./search-box.scss');

module.exports = angular.module('components.search-box', [])
	.directive('searchBox', [function() {
		return {
			template: require('./search-box.html'),
			controllerAs : 'search',
			scope: {
				search: '='
			}
	  	}
	}])
	.name;
