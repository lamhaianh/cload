var express = require('express');

var app = express();
var port = process.env.PORT || 3000;


app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.set(express.bodyParser());
	app.use(require('stylus').middleware({src: __dirname + '/public' }));
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {

	res.render('layout', 
		{
			title: 'Home'
		}
	);	

});

app.listen(port);
console.log('Server is listening on port ' + port);
