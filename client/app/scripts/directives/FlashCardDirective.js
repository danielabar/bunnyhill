'use strict';

angular.module('meanRecipieApp')
  .directive('flashcard', function () {
    return {
      restrict: 'E',
      scope: {
			  value: "@cardValue",								
			  translated: "@cardTranslated",		
			  flipcard: "@flipCard"											
			},
      template: '<div class="card">{{value}}</div>',
      link: function (scope, element, attrs) {
        
        attrs.$observe('cardValue', function(data) {
        	console.log('FlashCard $observe cardValue: ' + angular.toJson(data));
		    	scope.value = data;
		    });

		    attrs.$observe('cardTranslated', function(data) {
        	console.log('FlashCard $observe cardTranslated: ' + angular.toJson(data));
		    	scope.translated = data;
		    });

		    attrs.$observe('flipCard', function(data) {
        	console.log('FlashCard $observe flipCard: ' + angular.toJson(data));
		    	scope.flipcard = data;
		    });

      }
    };
  });
