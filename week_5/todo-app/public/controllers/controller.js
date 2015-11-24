var Todo = angular.module('Todo', []);

Todo.controller('basicController', ['$scope', basicController]);

function basicController($scope) {
    $scope.items = [
        {
            name: 'item-1'
        },
        {
            name: 'item-2'
        }
    ]
}