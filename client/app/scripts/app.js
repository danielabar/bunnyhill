'use strict';

angular.module('meanRecipieApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'LocalStorageModule'
])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/game/:name', {
				templateUrl: 'views/game.html',
				controller: 'GameCtrl'
			})
			.when('/score/:name', {
				templateUrl: 'views/score.html',
				controller: 'ScoreCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});