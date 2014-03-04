var express = require('express')
	, stylus = require('stylus')
	, nib = require('nib')
	, route = require('./lib/routes.js')

var app = express()

function compile(str, path) {
	return stylus(str)
		.set('filename', path)
		.use(nib())
}

app.configure(function() {
	app.set('views', __dirname + '/views')
	app.set('view options', {layout: false})

	app.use(express.bodyParser())
	app.use(express.logger('dev'))
	app.use(express.static(__dirname + '/static'))
	app.use(stylus.middleware({
		src: __dirname + '/static/css',
		compile: compile
	}))

	app.engine('html', require('ejs').renderFile)
})


app.get('/', route.home)


var port = process.env.PORT || 9000

app.listen(port, function() {
	console.log("Listening on " + port);
})