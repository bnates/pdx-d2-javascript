var angular = require('angular'),
	$router = require('angular-route'),
    searchBox = require('./search-box'),
    taskList = require('./task-list');

module.exports = angular.module('todo', [$router, searchBox, taskList])

	.config(['$routeProvider', function($router) {
	  $router.when('/todos', {
	    templateUrl: 'views/todo/todo.html',
	    controller: 'TodoCtrl'
	  });
	}])

	.controller('TodoCtrl', ['$scope', 'Task', TodoCtrl])
    .name;


function TodoCtrl($scope, Task) {
    $scope.tasks = Task.query();

    $scope.add = function(){
        var todo = new Task({ description: $scope.taskName, done: false });
        todo.$save().then(function(todo){
            $scope.tasks.push(todo);
            $scope.taskName = '';
        },
        function(err){
            alert( 'add task failed!' );
        });

    }

    $scope.removeCompleted = function(){
        Task.removeCompleted().$promise.then(function(response){
            $scope.tasks = $scope.tasks.filter(function(task){
                return task.done !== true;
            });
        },
        function(err){
            alert( 'remove completed failed!' );
        });
    }
}
