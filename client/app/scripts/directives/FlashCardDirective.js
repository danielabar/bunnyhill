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
      		'<div id="feedbackMarkerSuccess" class="circle circle-success">&#x2713;</div>' +
      		'<div id="feedbackMarkerError" class="circle circle-error">&#x2718;</div>' +
      	'</div>',
      replace: true,

      link: function (scope, element, attrs) {

      	var hideMarker = function() {
      		$('#feedbackMarkerSuccess').hide();
      		$('#feedbackMarkerError').hide();
      	};

      	var displayMarker = function(result) {
      		if (result) {
      			$('#feedbackMarkerSuccess').show();
      		} else {
      			$('#feedbackMarkerError').show();
      		}
      	};

      	hideMarker();

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
		    		displayMarker(data.isAnswerCorrect);
			    	$animate.addClass(element, 'animated flipInY', function() {
	            $timeout(function() {
	              $animate.removeClass(element, 'animated flipInY');
	            }, 1000);
	          });
		    	} else {
		    		hideMarker();
		    		if (data && data.flipCard === false) {
			    		$animate.addClass(element, 'animated rotateOutUpLeft', function() {
		            $timeout(function() {
		              $animate.removeClass(element, 'animated rotateOutUpLeft');
		            }, 1000);
		          });
		    		}
		    	}
		    });

      }
    };
  });
