var angular = require('angular');

module.exports = angular.module('view.todo', [
        require('angular-route'),
        require('./tasks/tasks'),
        require('./search-box/search-box')
    ])

	.config(['$routeProvider', function($router) {
	  $router.when('/todo', {
	    template: require('./todo.html'),
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
