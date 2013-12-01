'use strict';

angular.module('meanRecipieApp')
  .directive('audiocard', function ($document) {
    return {
      restrict: 'E',
      scope: {
      	message: "=message",
      	carddata: "="
      },
      template:
      	'<div class="card"> ' +
      		'<div class="span2">Display Test</div>' +
      		'<img src="img/audio.gif" class="img-circle" height="42" width="42">' +
      	'</div>',
      replace: true,

      link: function postLink(scope, element, attrs) {

      	var audioElement = $document[0].createElement('audio');

      	scope.$watch('carddata', function(data) {
      		if(data && data.audio) {
      			audioElement.src = data.audio;
      			audioElement.play();
      		}
      	});

      }
    };
  });
