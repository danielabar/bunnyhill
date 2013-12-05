var express = require('express');
var lessMiddleware = require('less-middleware');
var logger = require('./server/lib/log');
var db = require('./server/lib/db');
var deckApi = require('./server/routes/DeckApi');
var scoreApi = require('./server/routes/ScoreApi');
var http = require('http');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());

app.use(lessMiddleware({
    dest: __dirname + '/client/app/styles',
    src: __dirname + '/client/app/less',
    paths: [path.join(__dirname, 'bootstrap')],
    prefix: '/styles',
    compress: true
}));

app.use(express.static(path.join(__dirname, '/client/app')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/deck', deckApi.get);
app.get('/deck/:name', deckApi.getByName);
app.get('/score', scoreApi.get);
app.get('/score/:id', scoreApi.getById);
app.post('/score', scoreApi.post);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
