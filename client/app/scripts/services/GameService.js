'use strict';

angular.module('meanRecipieApp')
	.factory('GameService', function(localStorageService, ScoreResource) {

		var level = "Advanced";

		var game = {
			scoreBoard: {}
		};
		var cardIndex = 0;

		var saveScoreboardLocal = function() {
			localStorageService.add(game.deck.name, angular.toJson(game.scoreBoard));
		};

		return {

			getLevel: function() {
    		return level;
    	},

			initScoreBoard: function() {
				cardIndex = 0;
				game.scoreBoard.playedDate = new Date();
				game.scoreBoard.level = level;
				game.scoreBoard.score = 0;
				game.scoreBoard.incorrectCards = [];
				game.scoreBoard.correctCards = [];
				game.scoreBoard.deckName = "";
				if (game.deck) {
					game.scoreBoard.outOf = game.deck.cards.length;
				}
			},

			getGame: function() {
				this.initScoreBoard();	
				return game;
			},

			setGame: function(deck) {
				game.deck = deck;
				this.initScoreBoard();
			},

			getNextCard: function() {
				if (cardIndex < game.deck.cards.length) {
					var nextCard = game.deck.cards[cardIndex];
					cardIndex = cardIndex + 1;
					return nextCard;
				}
				return null;
			},

			checkGuess: function(card, guess) {
				if (card.translated === guess) {
					return true;
				} else {
					return false;
				}
			},

			// FIXME: Don't add same card twice (if UI accidentally allows user to replay the same card)
			updateScoreBoard: function(guessResult, card) {
				if (guessResult) {
					game.scoreBoard.score += 1;
					game.scoreBoard.correctCards.push(card);
				} else {
					game.scoreBoard.incorrectCards.push(card);
				}
				game.scoreBoard.deckName = game.deck.name;
				saveScoreboardLocal();
				return game.scoreBoard;
			},

			getScoreBoard: function() {
				return game.scoreBoard;
			},

			saveScoreBoard: function() {
				ScoreResource.save(game.scoreBoard);
			},

			buildFeedback: function(result, card) {
				if (result) {
					return 'Correct';
				} else {
					return 'Incorrect, answer is: ' + card.translated;
				}
			}

		};
	});