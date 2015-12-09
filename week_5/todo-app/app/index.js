var angular = require('angular');
require('./services/TodoService');
require('./views/todo-list');
require('./filters/moment');

require('./style.scss');

var Todo = angular.module('Todo', [
	require('angular-resource'),
	'todo.services',
	'todo.todo-list',
	'todo.moment-filter'
])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/todos'});
}]);
