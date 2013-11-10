'use strict';

angular.module('meanRecipieApp')
	.controller('MainCtrl', function($scope, Deck, GameService, $location) {

		$scope.decks = Deck.query();

		$scope.startGame = function(deck) {
			GameService.setGame(deck);
			$location.path('#/game/' + deck.name);
		}

	});