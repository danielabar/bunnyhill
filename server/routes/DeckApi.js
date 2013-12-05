var mongoose = require('mongoose');
var logger = require('../lib/log');
var Deck = mongoose.model('Deck');

exports.get = function(req, res) {
	Deck.find(function(err, data) {
		if (err) {
			logger.error(module + ' get all deck err: ' + err);
			res.send(err);
		} else {
			logger.info('data to be returned: ' + JSON.stringify(data));
			res.json(data);
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