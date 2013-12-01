'use strict';

angular.module('meanRecipieApp')
	.factory('GameService', function() {

		var level = "Advanced";
		var scoreBoard = {};
  	var cardIndex;
  	var deck;

  	var initScoreboard = function(deckToPlay) {
  		scoreBoard.playedDate = new Date();
  		scoreBoard.level = level;
     	scoreBoard.deckName = deck.name
     	scoreBoard.score = 0;
     	scoreBoard.incorrectCards = [];
     	scoreBoard.correctCards = [];
     	scoreBoard.outOf = deck.cards.length;
  	};

  	var beginnerCheck = function(card, guess) {
  		return (card.value === guess);
  	};

  	var advancedCheck = function(card, guess) {
  		return (card.translated === guess);
  	};

  	var levelToCheckMap = {
  		beginner: beginnerCheck,
  		advanced: advancedCheck
  	};

		return {

			getLevel: function() {
    		return level;
    	},

			initGame: function (deckToPlay) {
      	deck = deckToPlay;
       	cardIndex = 0;
       	initScoreboard(deckToPlay);
      },

			getNextCard: function() {
				if (cardIndex < deck.cards.length) {
					var nextCard = deck.cards[cardIndex];
					cardIndex = cardIndex + 1;
					return nextCard;
				}
				return null;
			},

			checkGuess: function(card, guess, level) {
				var checkFunction = levelToCheckMap[level];
				var checkResult = checkFunction.apply(null, [card, guess]);
				if (checkResult) {
					return true;
				} else {
					return false;
				}
			},

			updateScoreBoard: function(guessResult, card) {
				if (guessResult) {
					scoreBoard.score += 1;
					scoreBoard.correctCards.push(card);
				} else {
					scoreBoard.incorrectCards.push(card);
				}
				return scoreBoard;
			},

			getScoreBoard: function() {
				return scoreBoard;
			}

		};
	});