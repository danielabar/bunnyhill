var mongoose = require('mongoose');
var logger = require('../lib/log');
var Deck = mongoose.model('Deck');
var Score = mongoose.model('Score');
var _ = require('underscore');
var async = require('async');

var getRecentScoreByDeck = function(deckName, cb) {
	Score.find({ 'deckName': deckName }, 'deckName playedDate score outOf').sort({ playedDate: 'desc'}).limit(1).exec(function(err, score) {
		cb(err, score[0]);
	});
};

exports.get = function(req, res) {
	Deck.find(function(err, decks) {
		if (err) {
			logger.error(module + ' get all deck err: ' + err);
			res.send(err);
		} else {
			var deckNames = _.pluck(decks, "name");
			async.map(deckNames, getRecentScoreByDeck, function(err, scores){
				var scoresByDeckName = _.indexBy(scores, 'deckName');
				var decksPlusScores = _.map(decks, function(deck) { 
					var newDeck = JSON.parse(JSON.stringify(deck));
					var scoreMatch = scoresByDeckName[deck.name];
					logger.info('scoreMatch: ' + JSON.stringify(scoreMatch));
					newDeck.mostRecentScore = scoreMatch;
					return newDeck; 
				});
				logger.info('Returning decksPlusScores: ' + JSON.stringify(decksPlusScores));
				res.send(decksPlusScores);
			});
		}
	});
};

exports.getByName = function(req, res) {
	var name = req.params.name;
	Deck.findOne({
		'name': name
	}, function(err, data) {
		if (err) {
			logger.error(module + ' get deck by name err=' + err);
			res.send(err);
		} else {
			logger.info('data to be returned: ' + JSON.stringify(data));
			res.send(data);
		}
	});
};