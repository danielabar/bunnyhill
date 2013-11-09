var mongoose = require('mongoose');
var Deck = mongoose.model('Deck');

exports.get = function(req, res) {
	// var id = req.params.id;
	Deck.find(function(err, data) {
		if (err) {
			logger.error(module + ' get all deck err: ' + err);
			res.send(err);
		} else {
			console.log('data to be returned: ' + JSON.stringify(data));
			res.json(data);
		}
	});
};

exports.getByName = function(req, res) {
	var name = req.params.name;
	Deck.findOne({'name': name}, function(err, data) {
		if (err) {
			logger.error(module + ' get deck by name err=' + err);
			res.send(err);
		} else {
			res.send(data);
		}
	});
};