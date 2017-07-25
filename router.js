var whatis = require('./whatis');
var videos = require('./videos');
var books = require('./books');
var tools = require('./tools');
var confs = require('./confs');
var help = require('./help');

var fs = require('fs');

module.exports = function (req, res) {
  
	var username = req.body.user_name;
	var text = req.body.text;

	var command = text.split(' ');
	var category = command[1];
	var response = 'sorry, ' + username + ' no category:' + category + ', found. \n@jan, please add content for: ' + text;

	switch(category) {
		case "whatis":
				response = whatis.get(username, text);
			break;
		case "videos":
				response = videos.get(username, text);
			break;
		case "books":
				response = books.get(username, text);
			break;
		case "tools":
				response = tools.get(username, text);
			break;
		case "confs":
				response = confs.get(username, text);
			break;
		case "help":
				response = help.help();
			break;
		default:
/*
				fs.appendFile('category.txt', username + " search for " + text, function(error) {
					if (error) {
						console.log('Error:- ' + error);
						throw error;
					}
					console.log("data appended!!");
				});
*/
			break;
	}

	var botPayload = {
		text : response
	};

	// avoid infinite loop
	if (username !== 'slackbot') {
		return res.status(200).json(botPayload);
	} 
	else {
		return res.status(200).end();
	}
}
