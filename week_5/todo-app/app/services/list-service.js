var angular = require('angular');

var local = [ '$q', function local($q) {
    return {
        get: function(cb) {
            var tasks = $q.defer();
            tasks.resolve([
                {
                    description: 'foo blah task description - task 1',
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

angular.module('todo.list-service', [])
    .factory( 'listService', local);
