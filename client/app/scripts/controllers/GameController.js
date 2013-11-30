'use strict';

angular.module('meanRecipieApp')
	.controller('GameCtrl', function($scope, $routeParams, GameService, Deck, $location, AudioService, ScoreResource) {

		$scope.name = $routeParams.name;
		$scope.game = GameService.getGame();
		$scope.scoreBoard = GameService.getScoreBoard();
		$scope.flipcard = false;

		// If user refreshed page, GameService state is lost, refetch the deck from api
		if (!$scope.game.deck) {
			var deck = Deck.get({
				name: $scope.name
			}, function(res) {
				GameService.setGame(deck);
				$scope.game = GameService.getGame();
				$scope.scoreBoard = GameService.getScoreBoard();
				$scope.currentCard = GameService.getNextCard();
			});
		} else {
			$scope.currentCard = GameService.getNextCard();
		};

		$scope.checkGuess = function() {
			$scope.flipcard = true;
			var result = GameService.checkGuess($scope.currentCard, $scope.guess);
			playSound(result);
			$scope.result = result;
			$scope.scoreBoard = GameService.updateScoreBoard(result, $scope.currentCard);
			$scope.feedback = GameService.buildFeedback(result, $scope.currentCard);
		};

		var playSound = function(result) {
			if (result) {
				AudioService.playCorrect();
			} else {
				AudioService.playIncorrect();
			}
		};

		$scope.getAlertType = function() {
			if (!$scope.result) {
				return "alert alert-error";
			} else {
				return "alert alert-success";
			}
		};

		$scope.moveAhead = function() {
			$scope.feedback = null;
			$scope.flipcard = false;
			$scope.currentCard = GameService.getNextCard();
			if ($scope.currentCard) {
				$scope.correct = false;
				$scope.incorrect = false;
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