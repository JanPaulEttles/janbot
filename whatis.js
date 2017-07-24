'use strict';

var tinycache = require('tinycache');
var db = new tinycache();
var fs = require('fs');

var lineReader = require('readline').createInterface({
	input: require('fs').createReadStream('whatis.txt')
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
		var result = 'sorry, ' + username + ' nothing found for ' + subject;

		if(db.get(subject) !== null) {
			result = db.get(subject);
		}
		else {
			fs.appendFile('whatis.txt', username + " search for " + text, function(error) {
			if (error) {
				console.log('Error:- ' + error);
				throw error;
			}
				console.log("data appended!!");
			});
		}
		return result;
	},
	help: function() {
		// whatever
	}
};

