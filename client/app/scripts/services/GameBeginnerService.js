'use strict';

angular.module('meanRecipieApp')
  .factory('GameBeginnerService', function () {

  	var level = "Beginner";
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

			checkGuess: function(card, guess) {
				if (card.value === guess) {
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
