var angular = require('angular');
require('./controllers/controller');
require('./filters/moment');

require('./style.scss');

var Todo = angular.module('Todo', [
	'todo.list-controller',
	'todo.moment-filter'
]);