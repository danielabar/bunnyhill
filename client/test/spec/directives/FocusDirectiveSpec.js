'use strict';

describe('Directive: FocusDirective', function() {

	// load the directive's module
	beforeEach(module('meanRecipieApp'));

	var element,
		scope;

	beforeEach(inject(function($rootScope) {
		scope = $rootScope.$new();
	}));

	// FIXME: focus() method does not exist
	xit('should focus the input', inject(function($compile) {
		scope.focusMe = true;
		
		element = angular.element('<input type="text" ng-model="guess" focus-me="focusInput" />');
		element = $compile(element)(scope);
		
		var wrappedEl = angular.element(element);
		spyOn(wrappedEl, 'focus');
		
		expect(element.focus).toHaveBeenCalled();
	}));
});