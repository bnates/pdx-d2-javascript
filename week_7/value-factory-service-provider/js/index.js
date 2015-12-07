import angular from 'angular';

let i = 1;

angular
	.module('app', [])
	.constant("MAGIC_NUMBER", 42)
	.value('classname', 'jsda')

	//.config
	//.run

	.factory('students', function () {
	  return i++;
	})

	.service('lettersService', LettersService)

	.provider('data', function () {
		var type;
		return {
			setType: function (value) {
			  type = value;
			},
			$get: function () {
			  return type === 'local' ? 'local' : 'server';
			}
		}
	})

	.controller('MainCtrl', [
		'MAGIC_NUMBER',
		'classname',
		'students',
		'lettersService',
		'data'
	function(
		MAGIC_NUMBER,
		classname,
		students,
		lettersService,
		data
	) {
		this.foo = 'code fellows';
		this.magicNumber = MAGIC_NUMBER;
		this.classname = classname;
		this.students = students;

		this.letters = lettersService.$get();
	}])

	.controller('SecondCtrl', [ 'students', function( students ) {
		this.students = students;
	}]);


function LettersService () {
	this.$get = function(){
		return [ 'a', 'b', 'c' ];
	};
}
