'use strict';

angular.module('meanRecipieApp')
	.controller('MainCtrl', function($scope, Deck, GameService, $location) {
		
		$scope.decks = Deck.query();
		
	});