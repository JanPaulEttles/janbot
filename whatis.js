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
	get: function(whatis) {
		var result = 'nothing found for ' + whatis;
		if(db.get(whatis) !== null) {
			result = db.get(whatis);
		}
		return result;
	},
	help: function() {
		// whatever
	}
};

