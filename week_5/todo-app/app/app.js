var angular = require('angular');
require('./views/list-view/list-view');
require('./filters/moment');

require('./style.scss');

var Todo = angular.module('TodoApp', [
	require('./resources'),
	'todo.list-view',
	'todo.moment-filter'
]).config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/list-view'});
}]);
