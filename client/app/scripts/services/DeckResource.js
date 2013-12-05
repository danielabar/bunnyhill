'use strict';

angular.module('meanRecipieApp')
	.factory('Deck', function($resource) {
		return $resource('/deck/:name');
	});