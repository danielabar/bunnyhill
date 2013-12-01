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
			// URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
			// Route: /Chapter/:chapterId/Section/:sectionId
			.when('/game/:name', {
				templateUrl: 'views/game.html',
				controller: 'GameCtrl'
			})
			.when('/gamebeginner/:name', {
			  templateUrl: 'views/gamebeginner.html',
			  controller: 'GameBeginnerCtrl'
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