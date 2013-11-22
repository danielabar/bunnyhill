'use strict';

angular.module('meanRecipieApp')
	.controller('MyScoresController', function($scope, Deck, ScoreResource) {
			$scope.decks = Deck.query();
			$scope.scoreBoard = ScoreResource.query();
	});