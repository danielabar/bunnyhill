'use strict';

angular.module('meanRecipieApp', [
	'ngRoute',
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngAnimate',
	'ui.bootstrap',
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
			.when('/myscores', {
			  templateUrl: 'views/myscores.html',
			  controller: 'MyScoresController'
			})
			.otherwise({
				redirectTo: '/'
			});
	});