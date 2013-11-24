'use strict';

/*
<div class="span2">
			How do you say...
		</div>
		<div class="span2">
			{{card.value}}
		</div>
*/

angular.module('meanRecipieApp')
  .directive('flashcard', function ($animate) {
    return {
      restrict: 'E',
      scope: {
      	message: "=message",
      	display: "=display",
			  value: "@cardValue",								
			  translated: "@cardTranslated",		
			  flipcard: "@flipCard"											
			},
      template: '<div class="card"><div class="span2">{{message}}</div><div class="span2">{{display}}</div></div>',
      replace: true,
      link: function (scope, element, attrs) {

        attrs.$observe('cardValue', function(data) {
        	scope.message = 'How do you say...';
		    	scope.display = data;
		    });

		    attrs.$observe('cardTranslated', function(data) {
		    	scope.translated = data;
		    });

		    attrs.$observe('flipCard', function(data) {
        	if(data === 'true') {
        		scope.message = 'Answer is:';
        		scope.display = scope.translated;
        		element.addClass('animated flipInY');
        	} else {
        		element.removeClass('animated flipInY');
        	}
		    });

      }
    };
  });
