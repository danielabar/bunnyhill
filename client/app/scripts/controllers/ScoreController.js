'use strict';

angular.module('meanRecipieApp')
	.controller('ScoreCtrl', function($scope, $routeParams, ScoreResource, GameService, $location, localStorageService) {

		$scope.id = $routeParams.id;

		ScoreResource.get({id: $scope.id}, function(res) {
			$scope.scoreBoard = res;
		});

		// var isEmpty = function(obj) {
  //   	return Object.keys(obj).length === 0;
		// }
		
		// $scope.scoreBoard = GameService.getScoreBoard();
		// if(isEmpty($scope.scoreBoard)) {
		// 	$scope.scoreBoard = angular.fromJson(localStorageService.get($scope.name));
		// 	if(isEmpty($scope.scoreBoard)) {
		// 		$location.path('/');
		// 	}
		// }

	});