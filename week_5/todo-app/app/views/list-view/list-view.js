var angular = require('angular'),
	$router = require('angular-route'),
    searchBox = require('../components/search-box/search-box');

angular.module('todo.list-view', [
        $router,
        searchBox,
    ])
	.config(['$routeProvider', function($router) {
	  $router.when('/list-view', {
	    template: require('./list-view.html'),
	    controller: 'ListCtrl'
	  });
	}])

	.controller('ListCtrl', ['$scope', 'Task', ListCtrl]);


function ListCtrl($scope, Task) {
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

    $scope.search = {};
}
