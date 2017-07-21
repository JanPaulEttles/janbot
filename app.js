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
var https = require('https')
var fs = require('fs');

var db = new tinycache();

var app = express();
app.set('port', 3000);
app.use(express.static(__dirname + '/'));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



var httpsOptions = {
	key: fs.readFileSync(__dirname + '/ca/server-key.pem'),
	cert: fs.readFileSync(__dirname + '/ca/server-crt.pem'),
    ca: fs.readFileSync(__dirname + '/ca/ca-crt.pem'),
    requestCert: true,
    rejectUnauthorized: false
}

//	crl: fs.readFileSync('./ca/ca-crl.pem'),
//    rejectUnauthorized: true


var server = https.createServer(httpsOptions, app).listen(app.get('port'), () => {
  console.log('server running on port ' + app.get('port'))
})

