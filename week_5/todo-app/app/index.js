var angular = require('angular');
require('./services/list-service');
require('./views/list-view/list-view');
require('./filters/moment');

require('./style.scss');

var Todo = angular.module('Todo', [
	'todo.list-service',
	'todo.list-view',
	'todo.moment-filter'
]).config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/list-view'});
}]);
