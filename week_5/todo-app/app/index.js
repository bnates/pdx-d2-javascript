var angular = require('angular');
require('./controllers/controller');
require('./filters/moment');

var Todo = angular.module('Todo', [
	'todo.list-controller',
	'todo.moment-filter'
]);