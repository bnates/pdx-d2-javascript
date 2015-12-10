var angular = require('angular');

module.exports = angular.module('components.search-box', [])
	.directive('searchBox', function(){
		return {
			templateUrl: 'views/components/search-box.html',
			scope: {
				search: '='
			},
			controller: [ '$scope', function($scope){
				$scope.search = $scope.search || {};
			}]
		};
	})
	.name;
