'use strict';

angular.module('meanRecipieApp')
  .directive('gameAudio', function () {
    return {
      restrict: 'A',
      scope: {              
	      playsound: "@"
	    },
      link: function postLink(scope, element, attrs) {

      	var id = angular.element(element).attr("id");

      	attrs.$observe('playsound', function(value) {
					if (value) {
						console.log('playsound = ' + value);
					}
				});

        scope.$watch("playsound", function (newVal, oldVal) {
            console.log("playsound has changed " + oldVal + " >> " + newVal);
            if (newVal === "true") {
            	console.log('Directive calling play');
            	document.getElementById(id).play();
            }
        });

      }
    };
  });
