var db = require('./db.js')

exports.home = function(req, res) {
	res.render('index.html', {
		title: 'Home',
		name: 'Meynard',
		age: 23
	})
}

exports.add = function(req, res) {

}

exports.edit = function(req, res) {

}