'use strict';

angular.module('meanRecipieApp')
	.controller('GameCtrl', function($scope, $routeParams, GameService, Deck, $location, AudioService) {

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
		}

		$scope.checkGuess = function() {
			$scope.flipcard = true;
			var result = GameService.checkGuess($scope.currentCard, $scope.guess);
			playSound(result);
			$scope.result = result;
			$scope.scoreBoard = GameService.updateScoreBoard(result, $scope.currentCard);
			$scope.feedback = GameService.buildFeedback(result, $scope.currentCard);
			moveAhead();
		}

		var playSound = function(result) {
			if (result) {
				AudioService.playCorrect();
			} else {
				AudioService.playIncorrect();
			}
		}

		$scope.getAlertType = function() {
			if (!$scope.result) {
				return "alert alert-error";
			} else {
				return "alert alert-success";
			}
		}

		$scope.clearFeedback = function() {
			$scope.feedback = null;
		}

		var moveAhead = function() {
			$scope.currentCard = GameService.getNextCard();
			if ($scope.currentCard) {
				$scope.correct = false;
				$scope.incorrect = false;
				$scope.guess = " ";
			} else {
				GameService.saveScoreBoard();
				$location.path('/score/' + $scope.name);
			}
		}

	});