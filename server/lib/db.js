var mongoose = require('mongoose');
var logger = require('./log');

// TODO: host/db/user/pswd should be configurable
var mongoURL = 'mongodb://127.0.0.1/langfun';
mongoose.connect(mongoURL);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
	logger.info('mongoose connection is open');
});

var DeckModel = mongoose.model('Deck', new mongoose.Schema(
	{ name : String }, 
	{strict: false}
));

var ScoreModel = mongoose.model('Score', new mongoose.Schema(
	{ deckName : String, 
		playedDate : Date,
		score : Number,
		outOf : Number 
	},
	{strict: false}
));