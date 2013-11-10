'use strict';

angular.module('meanRecipieApp')
	.factory('GameService', function(localStorageService) {

		var game = {
			scoreBoard: {}
		};
		var cardIndex = 0;

		var saveScoreboard = function() {
			localStorageService.add(game.deck.name, angular.toJson(game.scoreBoard));
		};

		return {

			initScoreBoard: function() {
				cardIndex = 0;
				game.scoreBoard.score = 0;
				game.scoreBoard.incorrectCards = [];
				game.scoreBoard.correctCards = [];
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

			// Nice to have: save in LocalStorage: date, game.deck.name, scoreBoard
			updateScoreBoard: function(guessResult, card) {
				if (guessResult) {
					game.scoreBoard.score += 1;
					game.scoreBoard.correctCards.push(card);
				} else {
					game.scoreBoard.incorrectCards.push(card);
				}
				saveScoreboard();
				return game.scoreBoard;
			},

			getScoreBoard: function() {
				return game.scoreBoard;
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