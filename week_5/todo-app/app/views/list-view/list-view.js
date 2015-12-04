var angular = require('angular'),
	$router = require('angular-route');

angular.module('todo.list-view', [$router])
	.config(['$routeProvider', function($router) {
	  $router.when('/list-view', {
	    templateUrl: 'views/list-view/list-view.html',
	    controller: 'ListCtrl'
	  });
	}])

	.controller('ListCtrl', ['$scope', 'listService', ListCtrl]);


function ListCtrl($scope, listService) {
    listService.get().then( function(tasks){
        $scope.tasks = tasks;
    });

    $scope.search = {};
    // $scope.showSearch = function(){
    // 	console.log($scope);
    // 	$scope.search.$ = 'haha';
    // };
}
