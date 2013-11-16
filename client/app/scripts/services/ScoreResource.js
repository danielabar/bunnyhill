'use strict';

angular.module('meanRecipieApp')
	.factory('ScoreResource', function($resource) {
		return $resource('/score');
	});