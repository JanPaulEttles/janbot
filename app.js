/*
npm install express
npm install body-parser
npm install cookie-parser
npm install tinycache
npm install node-uuid
*/

var express = require('express');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var tinycache = require('tinycache');
var uuid = require('node-uuid');
var fs = require('fs');

var db = new tinycache();


/**
heroku terminate ssl at their loadbalances, so no need to make app ssl aware
heroku also config the port, so don't specify it
**/
var app = express();
app.use(express.static(__dirname + '/public/'));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen((process.env.PORT || 3000), function() {
  console.log('running... ');
});


