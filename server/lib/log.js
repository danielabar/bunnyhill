var logger = require('winston');
var fs = require('fs');
var path = require('path');

var logs_path = path.resolve(__dirname, "../logs");
if (!fs.existsSync(logs_path)) {
	fs.mkdirSync(logs_path);
}

var logfile = __dirname + '/../logs/development.log';
if (process.env.NODE_ENV == 'production') {
	logfile = __dirname + '/../logs/production.log';
}

logger.add(logger.transports.File, {
	filename: logfile
});
module.exports = logger;