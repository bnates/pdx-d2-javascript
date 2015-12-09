var angular = require('angular');

module.exports = angular.module('todo.task-list', [])
	.directive('taskList', [function() {
		return {
			templateUrl : 'views/todo/task-list.html',
			scope: {
				tasks: '=',
				filter: '='
			},
			controller: [ '$scope', function($scope) {

				$scope.complete = function(todo){
				    todo.done = true;
				    todo.$update().then(function(updated){
				        var index = findIndex(updated);
				        $scope.tasks[index] = updated;
			    	})
			    	.catch(fail('complete'));
				}

				$scope.remove = function(todo){
				    todo.$delete().then(function(removed){
				        var index = findIndex(removed);
				        $scope.tasks.splice( index, 1 );
				    })
				    .catch(fail('remove'));
				}

				function findIndex(find){
				    return $scope.tasks.findIndex(function(task) {
				        return task._id === find._id;
				    });
				}

				function fail(action){
					return function(err){
						alert(action + ' task failed!');
					}
				}
			}]
	  	}
	}])
	.name;
