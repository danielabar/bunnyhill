'use strict';

angular.module('meanRecipieApp')
  .directive('audiocard', function ($document) {
    return {
      restrict: 'E',
      scope: {
      	message: "=message",
      	carddata: "=",
      	behaviour: "="
      },
      template:
      	'<div class="card"> ' +
      		'<div class="span2">{{message}}</div>' +
      		'<img ng-click="replayAudio()" src="img/audio.gif" class="img-circle" height="42" width="42">' +
      		'<div id="feedbackMarkerSuccess" class="circle circle-success">&#x2713;</div>' +
      		'<div id="feedbackMarkerError" class="circle circle-error">&#x2718;</div>' +
      	'</div>',
      replace: true,

      link: function postLink(scope, element, attrs) {

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

      	var audioElement = $document[0].createElement('audio');

      	scope.replayAudio = function() {
      		audioElement.play();
      	};

      	hideMarker();

      	scope.$watch('carddata', function(data) {
      		if(data && data.audio) {
      			scope.carddata = data;
      			scope.message = 'Enter the word exactly as you just heard';
      			audioElement.src = data.audio;
      			audioElement.play();
      		}
      	});

      	scope.$watch('behaviour', function(data) {
      		if (data && data.flipCard) {
      			scope.message = 'Answer is:' + scope.carddata.translated;
      			displayMarker(data.isAnswerCorrect);
      		} else {
      			hideMarker();
      		}
      	});

      }
    };
  });
