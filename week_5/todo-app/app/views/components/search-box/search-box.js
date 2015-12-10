var angular = require('angular');
require('./search-box.scss');

module.exports = angular.module('components.search-box', [])
	.directive('searchBox', function(){
		return {
			restrict: 'E',
			template: require('./search-box.html'),
			scope: {
				search: '='
			},
			controller: [ '$scope', function($scope){
				$scope.search = $scope.search || {};
			}]
		};
	})
	.name;
