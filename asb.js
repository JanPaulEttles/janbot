/*
    ,,,
   (. .)
ooO-(_)-Ooo
wot no .....
*/
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

var hellobot = require('./hellobot');
var echobot = require('./echobot');
var router = require('./router');


/*
curl -X POST --data "text=asktheexpert whatis poop" https://appsecexpert.herokuapp.com/router


TJS5ShQTr11ZHpboIouCnXlt


check the token.  if not valid, respond 404
*/

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!') });

// error handler
app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(400).send(err.message);
});

app.post('/hello', hellobot);
app.post('/echo', echobot);
app.post('/router', router);

app.listen(port, function () {
	console.log('Slack bot listening on port ' + port);
});
