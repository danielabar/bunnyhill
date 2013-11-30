'use strict';

angular.module('meanRecipieApp')
  .controller('GameBeginnerCtrl', function ($scope, $routeParams, Deck, $log, GameBeginnerService) {
   	
   	$scope.name = $routeParams.name;

   	Deck.get({name: $scope.name}, function(res) {
   		$scope.deck = res;
   		GameBeginnerService.initGame(res);
   		$scope.currentCard = GameBeginnerService.getNextCard();
   		$scope.level = GameBeginnerService.getLevel();
   	});

  });
