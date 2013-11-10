'use strict';

angular.module('meanRecipieApp')
	.controller('ScoreCtrl', function($scope, $routeParams, GameService, $location) {

		$scope.name = $routeParams.name;

		var isEmpty = function(obj) {
    	return Object.keys(obj).length === 0;
		}
		
		$scope.scoreBoard = GameService.getScoreBoard();
		if(isEmpty($scope.scoreBoard)) {
			$location.path('/');
		}

	});