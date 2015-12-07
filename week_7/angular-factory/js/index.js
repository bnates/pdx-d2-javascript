var angular = require('angular');
var $router = require('angular-route');

console.log( '$router', $router );

var i = 1;

function LettersService(){
	this.$get = function(){
		return ['a', 'b', 'c'];
	};
}

var name = angular.module('app', [])

	.constant('MAGIC_NUMBER', 42)

	.value('classname', 'jsda')

	.config([ 'MAGIC_NUMBER', 'dataProvider', function(MAGIC_NUMBER, dataP){
		console.log('config', MAGIC_NUMBER);
		dataP.type('two');
	}])

	.run(function(MAGIC_NUMBER, classname, data){
		console.log('run', MAGIC_NUMBER, classname, data);

	})

	.factory('students', function(){
		return i++;
	})

	.service('letters', LettersService)

	.provider('data', function(){
		var objects = {
			one: { name: 'object1' },
			two: { name: 'object2' }
		};

		var type = 'one';

		return {
			type( t ){
				type = t;
			},
			$get: function(){
				return objects[type];
			}
		};
	})

	.controller('MainCtrl', [
		'MAGIC_NUMBER',
		'classname',
		'students',
		'letters',
		'data',
	function(
		MAGIC_NUMBER,
		classname,
		students,
		letters,
		data
	){
		this.foo = 'foo';
		this.magicNumber = MAGIC_NUMBER;
		this.classname = classname;
		this.students = students;
		this.letters = letters.$get();
		this.obj = data;
	}
	])

	.controller('SecondCtrl', [
		'students',
	function(
		students
	){
		this.students = students;
	}
	])

	.name;

console.log( 'app name', name );
