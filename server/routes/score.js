var mongoose = require('mongoose');
var logger = require('../lib/log');
var Score = mongoose.model('Score');

exports.get = function (req, res) {
	Score.find(function(err, data) {
		if (err) {
			logger.error(module + ' get all score err: ' + err);
			res.send(err);
		} else {
			logger.info('found all scores: ' + JSON.stringify(data));
			res.json(data);
		}
	});
};

exports.getById = function (req, res) {
	var id = req.params.id;
	Score.findOne({'_id': id}, function(err, data) {
		if (err) {
			logger.error(module + ' get score by id err: ' + err);
			res.send(err);
		} else {
			logger.info('found score by id: ' + JSON.stringify(data));
			res.json(data);
		}
	});
};

exports.post = function (req, res) {
	var score = new Score(req.body);
	score.save(function(err) {
		if (err) {
			logger.error(module + ' post score err=' + err);
			res.send(err);
		} else {
			logger.info(module + ' post score succeeded '+ JSON.stringify(score));
			res.send(score);
		}
	});
};