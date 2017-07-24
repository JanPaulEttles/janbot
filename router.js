var whatis = require('./whatis');

module.exports = function (req, res) {
  
	var text = req.body.text.split('');
	var category = text[1];
	var subject = text[2];

	var response = '';
	switch(category) {
		case "whatis":
				response = whatis(subject);
			break;
		default:
				response = 'no category found: ' + req.body.text;
			break;
	}

	var userName = req.body.user_name;

	var botPayload = {
		text : reponse
	};

	// avoid infinite loop
	if (userName !== 'slackbot') {
		return res.status(200).json(botPayload);
	} 
	else {
		return res.status(200).end();
	}
}
