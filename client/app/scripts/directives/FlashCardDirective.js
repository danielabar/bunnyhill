'use strict';


angular.module('meanRecipieApp')
  .directive('flashcard', function ($timeout, $animate) {
    return {
      restrict: 'E',
      scope: {
      	message: "=message",
      	display: "=display",
			  value: "@cardValue",
			  translated: "@cardTranslated",
			  behaviour: "=behaviour"
			},
      template:
      	'<div class="card">' +
      		'<div class="span2">{{message}}</div>' +
      		'<div class="span2">{{display}}</div>' +
      	'</div>',
      replace: true,
      link: function (scope, element, attrs) {

      	var appendMarker = function(element, result) {
      		// TODO Show circle with X or check
      	};

        attrs.$observe('cardValue', function(data) {
        	scope.message = 'How do you say...';
		    	scope.display = data;
		    });

		    attrs.$observe('cardTranslated', function(data) {
		    	scope.translated = data;
		    });

		    scope.$watch('behaviour', function(data) {
		    	if(data && data.flipCard) {
		    		scope.message = 'Answer is:';
		    		scope.display = scope.translated;
		    		appendMarker(element, data.isAnswerCorrect);
			    	$animate.addClass(element, 'animated flipInY', function() {
	            $timeout(function() {
	              $animate.removeClass(element, 'animated flipInY');
	            }, 1000);
	          });
		    	}
		    });

      }
    };
  });
