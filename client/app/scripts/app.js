'use strict';

angular.module('meanRecipieApp', [
	'ngRoute',
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngAnimate',
	'ui.bootstrap',
	'LocalStorageModule',
	'underscore'
])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/game/level/:level/name/:name', {
			  templateUrl: 'views/game.html',
			  controller: 'GameCtrl'
			})
			.when('/score/:id', {
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