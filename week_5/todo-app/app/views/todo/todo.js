var angular = require('angular');

module.exports = angular.module('views.todo', [
        require('angular-route'),
        require('../components/search-box/search-box'),
        require('../components/tasks/tasks')
    ])
	.config(['$routeProvider', function($router) {
	  $router.when('/list-view', {
	    template: require('./todo.html'),
	    controller: 'TodoCtrl'
	  });
    }])
	.controller('TodoCtrl', ['$scope', 'Task', TodoCtrl])
    .name;

function TodoCtrl($scope, Task) {
    $scope.tasks = Task.query();
    $scope.taskName = '';

    $scope.add = function(){
    	var description = $scope.taskName.trim();
    	if ( !description ) return;

    	var task = new Task({
    		description: description,
    		done: false
    	});

    	task.$save().then(function(newTask){
    		$scope.tasks.push(newTask);
    		$scope.taskName = '';
    	});
    }

    $scope.removeCompleted = function(){
    	Task.removeCompleted().$promise.then(function( result ){
    		console.log('deleted count', result.removed);
    		$scope.tasks = $scope.tasks.filter(function(task){
    			return !task.done;
    		});
    	});
    }

    $scope.search = { done: false };
}
