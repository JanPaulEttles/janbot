var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;


var hellobot = require('./hellobot');
var echobot = require('./echobot');

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!') });
app.get('/echo', echobot);

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.post('/hello', hellobot);


app.listen(port, function () {
  console.log('Slack bot listening on port ' + port);
});
