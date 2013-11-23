'use strict';

// <flashcard card-value="{{card.value}}" cardobject="card" on-destroy="destroy()"></flashcard>
angular.module('meanRecipieApp')
  .directive('flashcard', function () {
    return {
      restrict: 'E',
      scope: {
			  value: "@cardValue",								// "@" pass as string, can be interpolated
			  currentCardObject: "=cardobject",		// "=" data bind this property 
			  onDestroy: "&"											// "&" pass a function
			},
      template: '<div class="card">{{value}}</div>',
      link: function (scope, element, attrs) {
        
        attrs.$observe('cardValue', function(data) {
        	console.log('FlashCard $observe cardValue: ' + angular.toJson(data));
		    	scope.value = data;
		    });

		    scope.$watch('cardobject', function(data) {
        	console.log('FlashCard $watch cardobject: ' + angular.toJson(data));
		    	scope.cardobject = data;
		    });

      }
    };
  });
