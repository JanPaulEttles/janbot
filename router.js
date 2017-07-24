var whatis = require('./whatis');

var fs = require('fs');

module.exports = function (req, res) {
  
	var username = req.body.user_name;
	var text = req.body.text;

	var command = text.split(' ');
	var category = command[1];
	var response = 'sorry, ' + username + ' no category found: ' + text;

	switch(category) {
		case "whatis":
				response = whatis.get(username, text);
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
