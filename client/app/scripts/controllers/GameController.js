'use strict';

angular.module('meanRecipieApp')
	.controller('GameCtrl', function($scope, $routeParams, GameService, Deck, $location) {

		$scope.name = $routeParams.name;
		$scope.game = GameService.getGame();
		$scope.scoreBoard = GameService.getScoreBoard();

		// experimenting with audio
		$scope.playSuccessSound = false;

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
			var result = GameService.checkGuess($scope.currentCard, $scope.guess);
			$scope.result = result;

			// experimenting with audio
			$scope.playSuccessSound = result;
			console.log('controller set playSuccessSound to: ' + $scope.playSuccessSound);

			$scope.scoreBoard = GameService.updateScoreBoard(result, $scope.currentCard);
			$scope.feedback = GameService.buildFeedback(result, $scope.currentCard);
			moveAhead();
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
				$location.path('/score/' + $scope.name);
			}
		}

	});