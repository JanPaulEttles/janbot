'use strict';


module.exports = {
	help: function() {
		var help = "usage: trigger category subject";
		help += "\ntrigger: asktheexpert, the shorthand, ate";
		help += "\ncategories: books, videos, confs, whatis, tools...";
		help += "\nsubjects: xss, sqli... all"
		return help;
	}
};

