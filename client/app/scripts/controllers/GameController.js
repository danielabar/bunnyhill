'use strict';

angular.module('meanRecipieApp')
	.controller('GameCtrl', function($scope, $routeParams, GameService, Deck, $location, AudioService, ScoreResource) {

		$scope.name = $routeParams.name;

			Deck.get({name: $scope.name}, function(res) {
	   		$scope.deck = res;
	   		GameService.initGame(res);
	   		$scope.currentCard = GameService.getNextCard();
	   		$scope.level = GameService.getLevel();
	   		$scope.scoreBoard = GameService.getScoreBoard();
	   	});

		$scope.checkGuess = function() {
			var result = GameService.checkGuess($scope.currentCard, $scope.guess);
			AudioService.playFeedback(result);
			$scope.result = result;
			$scope.flashCardBehaviour = {flipCard: true, isAnswerCorrect: result};
			$scope.scoreBoard = GameService.updateScoreBoard(result, $scope.currentCard);
		};

		$scope.moveAhead = function() {
			$scope.flashCardBehaviour = {flipCard: false, isAnswerCorrect: undefined};
			$scope.currentCard = GameService.getNextCard();
			if ($scope.currentCard) {
				$scope.guess = " ";
			} else {
				finishGame();
			}
		};

		var finishGame = function() {
			var finalScoreBoard = GameService.getScoreBoard();
			ScoreResource.save(finalScoreBoard, function(res) {
				$location.path('/score/' + res._id);
			})
		}

	});