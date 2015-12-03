var angular = require('angular');

var local = [ '$q', function local($q) {
    return {
        get: function(cb) {
            var tasks = $q.defer();
            tasks.resolve([
                {
                    description: 'foo local task description - task 1',
                    done: false,
                    created: new Date()
                },
                {
                    description: 'bar local task description - task 2',
                    done: true,
                    created: new Date()
                }
            ]);

            return tasks.promise;
        }
    };
}];

var server = [ '$http', function($http) {
    return {
        get: function(cb) {
            return $http.get('tasks').then( function(result) {
                return result.data;
            });
        }
    };
}];



var Todo = angular.module('todo.list-controller', []);

Todo.factory( 'tasksService', local);
Todo.controller('TaskCtrl', ['$scope', 'tasksService', TaskCtrl]);
// Todo.controller('TaskCtrl', ['$scope', '$http', TaskCtrl]);

function TaskCtrl($scope, tasksService) {
    tasksService.get().then( function(tasks){
        $scope.tasks = tasks;
    });

    $scope.search = {};
    $scope.showSearch = function(){
    	console.log($scope);
    	$scope.search.$ = 'haha';
    };
}
