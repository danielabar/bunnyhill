'use strict';

angular.module('meanRecipieApp')
	.controller('MyScoresController', function($scope, Deck, ScoreResource) {
			$scope.decks = Deck.query();
			$scope.numbersScoreBoard = new Array();
			$scope.scoreBoard = ScoreResource.query(function (response) {
		    angular.forEach(response, function (item) {
		        if (item.deckName == "Numbers") {
		        	 $scope.numbersScoreBoard.push(item);
		        }
		    });
		});
	});