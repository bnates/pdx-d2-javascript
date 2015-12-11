var angular = require('angular');
var $animate = require('angular-animate');
require('./tasks.scss');

module.exports = angular.module('components.tasks', [
		$animate
	])
	.directive('tasks', function(){
		return {
			restrict: 'E',
			template: require('./tasks.html'),
			scope: {
				tasks: '=',
				filter: '='
			},
			controller: [ '$scope', function($scope){

				$scope.markDone = function(task){
					task.done = true;
					task.$update().then(function(updatedTask){
						var index = findIndex(updatedTask);
						$scope.tasks[index] = updatedTask;
					})
				}

				$scope.remove = function(task){
					task.$delete().then(function(removedTask){
						var index = findIndex(removedTask);
						$scope.tasks.splice(index, 1);
					})
				}

				function findIndex(find){
					return $scope.tasks.findIndex(function(task){
						return task._id === find._id;
					});
				}
			}]
		};
	})
	.name;
