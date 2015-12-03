var angular = require('angular');
var moment = require('moment');

angular.module('todo.moment-filter', [])
	.filter('moment', function() {
	  return function(date) {
	    return moment(date).fromNow();
	  };
	});
