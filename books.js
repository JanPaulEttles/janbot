'use strict';

var midget = require('./midget');
var db = new midget();

var fs = require('fs');

var lineReader = require('readline').createInterface({
	input: require('fs').createReadStream('books.txt')
});

lineReader.on('line', function (line) {
	console.log('Line from file:', line);
	var values = line.split('\t');
	db.put(values[0], values[1]);
});

module.exports = {
	get: function(username, text) {
		var command = text.split(' ');
		var subject = command[2];
		var response = 'sorry, ' + username + ' no results found for ' + subject + '. \n@jan, please add content for: ' + text;

		if(subject !== null || subject === 'all') {
			response = 'all books:\n';

			var keys = db.keys;					
			keys.forEach(function(key, index) {
			  response += key + ' ' + db.get(key) + '\n';
			});

		}
		else 
		if(db.get(subject) !== null) {
			response = db.get(subject);
		}
		return response;
	},
	help: function() {
		// whatever
	}
};

