module.exports = function (req, res, next) {
  
console.log(req.body);
//var text = req.body.text;
  var botPayload = {
    text : req.body.text
  };

  // avoid infinite loop
  var userName = req.body.user_name;
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}
