var angular = require('angular');
require('./style.scss');

var Todo = angular.module('TodoApp', [
	require('angular-route'),
	require('./services'),
	require('./views/todo/todo')
])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({ redirectTo: '/todo' });
}]);
