'use strict';

angular.module('meanRecipieApp')
  .directive('FlashCard', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the FlashCard directive');
      }
    };
  });
