'use strict';

angular.module('meanRecipieApp')
	.controller('MyScoresController', function($scope, Deck, ScoreResource) {
			$scope.decks = Deck.query(function(response) {
				 $scope.scoreCard = response[0];
				 $scope.level = '';
			});

			var numbersGame = "Numbers";
			var daysOfWeekGame ="Days of the Week";
			var nounsGame = "Nouns Pluralization";
			var articlesGame = "Definite Articles";

			var beginner = "Beginner";
			var intermediate = "Intermediate";
			var advanced = "Advanced";

			$scope.numbersScoreBoard = new Array();
			$scope.numbersBeginnerScoreBoard = new Array();
			$scope.numbersIntermediateScoreBoard = new Array();
			$scope.numbersAdvanceScoreBoard = new Array();
			
			$scope.daysOfWeekScoreBoard = new Array();
			$scope.daysOfWeekBeginnerScoreBoard = new Array();
			$scope.daysOfWeekIntermediateScoreBoard = new Array();
			$scope.daysOfWeekAdvanceScoreBoard = new Array();

			$scope.nounsScoreBoard = new Array();
			$scope.nounsBeginnerScoreBoard = new Array();
			$scope.nounsIntermediateScoreBoard = new Array();
			$scope.nounsAdvanceScoreBoard = new Array();

			$scope.articlesScoreBoard = new Array();
			$scope.articlesBeginnerScoreBoard = new Array();
			$scope.articlesIntermediateScoreBoard = new Array();
			$scope.articlesAdvanceScoreBoard = new Array();


			$scope.scoreBoard = ScoreResource.query(function (response) {				
		    angular.forEach(response, function (item) {
		        if (item.deckName == numbersGame) {		        	
		        	 $scope.numbersScoreBoard.push(item);
		        	 if(item.level.toUpperCase() == beginner.toUpperCase()) {
		        	 		$scope.numbersBeginnerScoreBoard.push(item);
		        	 }	
		        	 if(item.level.toUpperCase() == intermediate.toUpperCase()) {
		        	 		$scope.numbersIntermediateScoreBoard.push(item);		        	 		
		        	 }	
		        	 if(item.level.toUpperCase() == advanced.toUpperCase()) {
		        	 		$scope.numbersAdvanceScoreBoard.push(item);		        	 		
		        	 }	
		        }
		        if(item.deckName == daysOfWeekGame) {
							$scope.daysOfWeekScoreBoard.push(item);
							if(item.level.toUpperCase() == beginner.toUpperCase()) {
		        	 		$scope.daysOfWeekBeginnerScoreBoard.push(item);
		        	 }	
		        	 if(item.level.toUpperCase() == intermediate.toUpperCase()) {
		        	 		$scope.daysOfWeekIntermediateScoreBoard.push(item);		        	 		
		        	 }	
		        	 if(item.level.toUpperCase() == advanced.toUpperCase()) {
		        	 		$scope.daysOfWeekAdvanceScoreBoard.push(item);		        	 		
		        	 }	
		        }
		        if(item.deckName == nounsGame) {
		        	$scope.nounsScoreBoard.push(item);
		        	if(item.level.toUpperCase() == beginner.toUpperCase()) {
		        	 		$scope.nounsBeginnerScoreBoard.push(item);
		        	 }	
		        	 if(item.level.toUpperCase() == intermediate.toUpperCase()) {
		        	 		$scope.nounsIntermediateScoreBoard.push(item);		        	 		
		        	 }	
		        	 if(item.level.toUpperCase() == advanced.toUpperCase()) {
		        	 		$scope.nounsAdvanceScoreBoard.push(item);		        	 		
		        	 }	
		        }
		        if(item.deckName == articlesGame) {
							$scope.articlesScoreBoard.push(item);
							if(item.level.toUpperCase() == beginner.toUpperCase()) {
		        	 		$scope.articlesBeginnerScoreBoard.push(item);
		        	 }	
		        	 if(item.level.toUpperCase() == intermediate.toUpperCase()) {
		        	 		$scope.articlesIntermediateScoreBoard.push(item);		        	 		
		        	 }	
		        	 if(item.level.toUpperCase() == advanced.toUpperCase()) {
		        	 		$scope.articlesAdvanceScoreBoard.push(item);		        	 		
		        	 }	
		        }
		    });
			});

			$scope.numberslineChartScore = [{values: $scope.numbersBeginnerScoreBoard},
															 {values: $scope.numbersIntermediateScoreBoard},
															 {values: $scope.numbersAdvanceScoreBoard}];

			$scope.daysOfWeeklineChartScore = [{values: $scope.daysOfWeekBeginnerScoreBoard},
															 {values: $scope.daysOfWeekIntermediateScoreBoard},
															 {values: $scope.daysOfWeekAdvanceScoreBoard}];

			$scope.nounslineChartScore = [{values: $scope.nounsBeginnerScoreBoard},
															 {values: $scope.nounsIntermediateScoreBoard},
															 {values: $scope.nounsAdvanceScoreBoard}];

		 	$scope.articleslineChartScore = [{values: $scope.articlesBeginnerScoreBoard},
															 {values: $scope.articlesIntermediateScoreBoard},
															 {values: $scope.articlesAdvanceScoreBoard}];
	});