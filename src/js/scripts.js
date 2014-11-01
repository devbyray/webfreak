(function () {

	'use strict';

	// var myFirebaseRef = new Firebase("https://webfreak.firebaseio.com/");

	var app = angular.module("webfreak", ["firebase"]);

	var ref = new Firebase("https://webfreak.firebaseio.com/");

	// let's create a re-usable factory that generates the $firebaseSimpleLogin instance
	app.factory("simpleLogin", ["$firebaseSimpleLogin", function($firebaseSimpleLogin) {
	  return $firebaseSimpleLogin(ref);
	}]);

	app.controller("AppCtrl", ["$scope", "$firebase", "simpleLogin",
		function($scope, $firebase, simpleLogin) {

			// create an AngularFire reference to the data
			var sync = $firebase(ref);

			// download the data into a local object
			$scope.data = sync.$asObject();

			// download the data into a local array
			$scope.messages = sync.$asArray();

			$scope.addMessage = function(text) {
				$scope.messages.$add({text: text});
			}

			$scope.auth = simpleLogin;
		}
	]);


})();
