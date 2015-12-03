import angular from 'angular';

const app = angular.module('app', []);

app.controller('mainController', ['$scope', function($scope){
	$scope.place = 'hello';
}]);

export default app;
