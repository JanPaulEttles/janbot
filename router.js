var whatis = require('./whatis');

var fs = require('fs');

module.exports = function (req, res) {
  
	var text = req.body.text.split(' ');
	var category = text[1];
	var subject = text[2];

	var response = '';

	switch(category) {
		case "whatis":
				response = whatis.get(subject);
			break;
		default:
				response = 'no category found: ' + req.body.text;		 
				fs.appendFile('category.txt', req.body.userName + " search for " + req.body.text, function(error) {
				if (error) {
					console.log('Error:- ' + error);
					throw error;
				}
					console.log("data appended!!");
				});
			break;
	}

	var userName = req.body.user_name;

	var botPayload = {
		text : response
	};

	// avoid infinite loop
	if (userName !== 'slackbot') {
		return res.status(200).json(botPayload);
	} 
	else {
		return res.status(200).end();
	}
}
