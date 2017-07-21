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

var app = express();
app.use(express.static(__dirname + '/public/'));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen((process.env.PORT || 3000), function() {
  console.log('running... ');
});


