/*

curl -X POST --data "user_name=jan&text=asktheexpert whatis xss" https://appsecexpert.herokuapp.com/router
curl -X POST --data "user_name=jan&text=asktheexpert videos sqli" https://appsecexpert.herokuapp.com/router
curl -X POST --data "user_name=jan&text=asktheexpert books wahh" https://appsecexpert.herokuapp.com/router
curl -X POST --data "user_name=jan&text=asktheexpert tools burp" https://appsecexpert.herokuapp.com/router
curl -X POST --data "user_name=jan&text=asktheexpert confs sans" https://appsecexpert.herokuapp.com/router

curl -X POST --data "user_name=jan&text=asktheexpert books all" https://appsecexpert.herokuapp.com/router

    ,,,
   (. .)
ooO-(_)-Ooo
wot no .....
*/

/*
npm install express --save
npm install body-parser --save
npm install cookie-parser --save
npm install js-sizeof --save
npm install node-uuid --save
*/


var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3001;

var hellobot = require('./hellobot');
var echobot = require('./echobot');
var router = require('./router');


/*
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
