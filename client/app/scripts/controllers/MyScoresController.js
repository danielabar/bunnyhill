'use strict';

angular.module('meanRecipieApp')
	.controller('MyScoresController', function($scope, Deck, ScoreResource) {
			$scope.decks = Deck.query();
			$scope.numbersScoreBoard = new Array();
			$scope.daysOfWeekScoreBoard = new Array();
			$scope.nounsScoreBoard = new Array();
			$scope.articlesScoreBoard = new Array();

			$scope.scoreBoard = ScoreResource.query(function (response) {
		    angular.forEach(response, function (item) {
		        if (item.deckName == "Numbers") {		        	
		        	 $scope.numbersScoreBoard.push(item);
		        }
		        if(item.deckName == "Days of the Week") {
							$scope.daysOfWeekScoreBoard.push(item);
		        }
		        if(item.deckName == "Nouns Pluralization") {
		        	$scope.nounsScoreBoard.push(item);
		        }
		        if(item.deckName == "Definite Articles") {
							$scope.articlesScoreBoard.push(item);
		        }
		    });
		});
	});