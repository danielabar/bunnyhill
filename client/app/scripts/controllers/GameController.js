'use strict';

angular.module('meanRecipieApp')
  .controller('GameCtrl', function ($scope, $routeParams, GameService, Deck, $location) {
    
    $scope.name = $routeParams.name;
    $scope.game = GameService.getGame();
    $scope.scoreBoard = GameService.getScoreBoard();

    // If user refreshed page, GameService state is lost, refetch the deck from api
    if(!$scope.game.deck) {
    	var deck = Deck.get({name:$scope.name}, function(res) {
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
    	$scope.scoreBoard = GameService.updateScoreBoard(result);
    	$scope.feedback = GameService.buildFeedback(result, $scope.currentCard);
    	moveAhead();
    }

    $scope.clearFeedback = function() {
    	$scope.feedback = null;
    }

    // TODO: handle when we're at the end of the deck
    var moveAhead = function() {
    	$scope.currentCard = GameService.getNextCard(); 
    	if ($scope.currentCard) {
	    	$scope.correct = false;
	    	$scope.incorrect = false;
	    	$scope.guess = " ";
    	} else {
    		$location.path('/score');
    	}
    }

  });
