module.exports = function (req, res) {
	var userName = req.body.user_name;

	var botPayload = {
		text : req.body.text
	};

	// avoid infinite loop
	if(userName !== 'slackbot') {
		return res.status(200).json(botPayload);
	} 
	else {
		return res.status(200).end();
	}
}
