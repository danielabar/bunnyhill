'use strict';

angular.module('meanRecipieApp')
  .controller('GameBeginnerCtrl', function ($scope, $routeParams, Deck, GameBeginnerService, AudioService, ScoreResource, $location) {

   	$scope.name = $routeParams.name;

   	Deck.get({name: $scope.name}, function(res) {
   		$scope.deck = res;
   		GameBeginnerService.initGame(res);
   		$scope.currentCard = GameBeginnerService.getNextCard();
   		$scope.level = GameBeginnerService.getLevel();
   		$scope.scoreBoard = GameBeginnerService.getScoreBoard();
   	});

   	$scope.checkGuess = function() {
			var result = GameBeginnerService.checkGuess($scope.currentCard, $scope.guess);
			AudioService.playFeedback(result);
			$scope.result = result;
			$scope.flashCardBehaviour = {"flipCard": true, "isAnswerCorrect": result};
			$scope.scoreBoard = GameBeginnerService.updateScoreBoard(result, $scope.currentCard);
			$scope.feedback = GameBeginnerService.buildFeedback(result, $scope.currentCard);
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
			$scope.flashCardBehaviour = {flipCard: false, isAnswerCorrect: undefined};
			$scope.currentCard = GameBeginnerService.getNextCard();
			if ($scope.currentCard) {
				$scope.guess = " ";
			} else {
				finishGame();
			}
		};

		var finishGame = function() {
			var finalScoreBoard = GameBeginnerService.getScoreBoard();
			ScoreResource.save(finalScoreBoard, function(res) {
				$location.path('/score/' + res._id);
			})
		}

  });
