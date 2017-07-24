module.exports = function (req, res, next) {
  var text = req.body.text;
  var botPayload = {
    text : req.body.text
  };

	return res.status(200).end();

}
