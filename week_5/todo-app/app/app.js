var angular = require('angular');
require('./filters/moment');

require('./style.scss');

var Todo = angular.module('TodoApp', [
	require('./resources'),
	require('./views/todo/todo'),
	'todo.moment-filter'
]).config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/list-view'});
}]);
