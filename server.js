var express = require('express');

var app = express();
var port = process.env.PORT || 3000;


app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(require('stylus').middleware({src: __dirname + '/public' }));
	app.use(express.static(__dirname + '/public'));
	app.use(express.bodyParser());
});

app.get('/', function(req, res) {

	res.render('index', {});	

});

app.post('/', function(req, res) {
	var keywords = req.param('keywords', null);
	console.log('Searching with keywords are ' + keywords)
	res.render('index', {searching: true});
});

app.listen(port);
console.log('Server is listening on port ' + port);
