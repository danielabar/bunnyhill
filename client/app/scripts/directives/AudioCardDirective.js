'use strict';

angular.module('meanRecipieApp')
  .directive('audiocard', function () {
    return {
      restrict: 'E',
      scope: {
      	message: "=message",
      	carddata: "="
      },
      template:
      	'<div class="card"> ' +
      		'<audio></audio>' +
      		'<div class="span2">Display Test</div>' +
      		'<img src="img/audio.gif" class="img-circle" height="42" width="42">' +
      	'</div>',
      replace: true,

      link: function postLink(scope, element, attrs) {

      	scope.$watch('carddata', function(data) {
      		console.log('AudioCardDirective carddata: ' + angular.toJson(data));
      	});

      }
    };
  });
