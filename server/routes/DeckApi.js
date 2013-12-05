var mongoose = require('mongoose');
var logger = require('../lib/log');
var Deck = mongoose.model('Deck');
var Score = mongoose.model('Score');
var _ = require('underscore');
var async = require('async');

var getRecentScoreByDeck = function(deckName, cb) {
	Score.findOne({ deckName : deckName }, { sort : { playedDate : -1 } }, function(err, result) {
		logger.info('getRecentScoreByDeck called for: ' + deckName + ', result: ' + JSON.stringify(result));
		cb(err, result);
	});
};

exports.get = function(req, res) {
	Deck.find(function(err, decks) {
		if (err) {
			logger.error(module + ' get all deck err: ' + err);
			res.send(err);
		} else {
			logger.info('DeckApi decks: ' + JSON.stringify(decks));
			logger.info('Decks Api decks.length = ' + decks.length);
			for (var i=0;i<decks.length;i++) {
				logger.info('cur deck name: ' + decks[i].name);
			}
			var deckNames = _.pluck(decks, "name");
			logger.info('DeckApi deckNames: ' + JSON.stringify(deckNames));
			async.map(deckNames, getRecentScoreByDeck, function(err, scores){
		    logger.info('DeckApi interim scores: ' + JSON.stringify(scores));
				// TODO munge results with decks
				res.send(decks);
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