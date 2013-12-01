var express = require('express');
var lessMiddleware = require('less-middleware');
var logger = require('./server/lib/log');
var db = require('./server/lib/db');
var deck = require('./server/routes/deck');
var score = require('./server/routes/score');
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
    prefix: '/styles',
    compress: true
}));

app.use(express.static(path.join(__dirname, '/client/app')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/deck', deck.get);
app.get('/deck/:name', deck.getByName);
app.get('/score', score.get);
app.get('/score/:id', score.getById);
app.post('/score', score.post);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
