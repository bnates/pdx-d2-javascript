var angular = require('angular'),
	$router = require('angular-route'),
	todoService = require;

angular.module('todo.todo-list', [$router])

	.config(['$routeProvider', function($router) {
	  $router.when('/todos', {
	    templateUrl: 'views/todo-list/todo-list.html',
	    controller: 'ListCtrl'
	  });
	}])

	.controller('ListCtrl', ['$scope', 'TodoService', ListCtrl]);


function ListCtrl($scope, Todo) {
    $scope.tasks = Todo.query();

    $scope.add = function(){
    	var todo = new Todo({ description: $scope.taskName, done: false });
    	todo.$save().then(function(todo){
    		$scope.tasks.push(todo);
    		$scope.taskName = '';
    	},
    	function(err){
    		alert( 'add task failed!' );
    	});

    }

    function findIndex(find){
        return $scope.tasks.findIndex(function(task) {
            task._id === find._id
        });
    }

    $scope.complete = function(todo){
        todo.done = true;
        Todo.update(todo).$promise.then(function(updated){
            var index = findIndex(updated);
            $scope.tasks[index] = updated;
        },
        function(err){
            alert( 'complete task failed!' );
        });
    }

    $scope.remove = function(todo){
        todo.$delete().then(function(removed){
            var index = findIndex(removed);
            $scope.tasks.splice( index, 1 );
        },
        function(err){
            alert( 'remove task failed!' );
        });
    }

    $scope.removeCompleted = function(){
        Todo.removeCompleted().$promise.then(function(response){
            $scope.tasks = $scope.tasks.filter(function(task){
                return task.done !== true;
            });
        },
        function(err){
            alert( 'remove completed failed!' );
        });
    }

}
