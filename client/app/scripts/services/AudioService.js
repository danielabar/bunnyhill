'use strict';

angular.module('meanRecipieApp')
  .factory('AudioService', function ($document) {
    
    var audioElement = $document[0].createElement('audio'); 
    var correctAnswerSound = "sounds/correct.mp3";
		var incorrectAnswerSound = "sounds/incorrect.mp3";
	  
	  return {
	    audioElement: audioElement,
	    
	    play: function(filename) {
	        audioElement.src = filename;
	        audioElement.play();     
	  	},

	  	playCorrect: function() {
	  		this.play(correctAnswerSound);
	  	},

	  	playIncorrect: function() {
	  		this.play(incorrectAnswerSound);
	  	},

	  	playFeedback: function(result) {
	  		if (result) {
					this.playCorrect();
				} else {
					this.playIncorrect();
				}
	  	}
	  }

  });
