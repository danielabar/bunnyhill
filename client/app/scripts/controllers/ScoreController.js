'use strict';

angular.module('meanRecipieApp')
	.controller('ScoreCtrl', function($scope, GameService, $location) {

		var isEmpty = function(obj) {
    	return Object.keys(obj).length === 0;
		}
		
		$scope.scoreBoard = GameService.getScoreBoard();
		console.log('ScoreCtrl: ' + angular.toJson($scope.scoreBoard));
		if(isEmpty($scope.scoreBoard)) {
			$location.path('/');
		}

	});