'use strict';

angular.module('todo.moment-filter', [])

.filter('moment', function() {
  return function(date) {
    return moment(date).fromNow();
  };
});
