'use strict';

describe('Service: Deck', function() {

	// load the service's module
	beforeEach(module('meanRecipieApp'));

	// instantiate service
	var Deck;
	beforeEach(inject(function(_Deck_) {
		Deck = _Deck_;
	}));

	// beforeEach(inject(function($injector) {
	// 	$httpBackend = $injector.get('$httpBackend');
	// }));

	// afterEach(function() {
	// 	$httpBackend.verifyNoOutstandingExpectation();
	// 	$httpBackend.verifyNoOutstandingRequest();
	// });

	it('should do something', function() {
		expect( !! Deck).toBe(true);
	});

});