'use strict';

var tinycache = require('tinycache');
var db = new tinycache();
var fs = require('fs');

var lineReader = require('readline').createInterface({
	input: require('fs').createReadStream('tools.txt')
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
		var response = 'sorry, ' + username + ' no category found. \n@jan, please add content for: ' + text;

		if(db.get(subject) !== null) {
			result = db.get(subject);
		}
		return result;
	},
	help: function() {
		// whatever
	}
};

