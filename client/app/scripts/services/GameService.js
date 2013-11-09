'use strict';

angular.module('meanRecipieApp')
	.factory('GameService', function() {

		var game = {
			scoreBoard: {},
			incorrectCards: []
		};
		var cardIndex = 0;

		return {

			initScoreBoard: function() {
				game.scoreBoard.score = 0;
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
					game.incorrectCards.push(card);
					return false;
				}
			},

			updateScoreBoard: function(guessResult) {
				if (guessResult) {
					game.scoreBoard.score += 1;
				}
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