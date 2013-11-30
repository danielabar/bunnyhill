'use strict';

angular.module('meanRecipieApp')
	.controller('ScoreCtrl', function($scope, $routeParams, ScoreResource, GameService, $location, localStorageService) {

		$scope.id = $routeParams.id;

		ScoreResource.get({id: $scope.id}, function(res) {
			$scope.scoreBoard = res;
		});

	});