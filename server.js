var express = require('express');  
var request = require('request');

var app = express();  

app.use('/darkskyForecast', function(req, res){
	var url =
		'https://api.darksky.net/forecast/'
		+ process.env.API_KEY
		+ '/'
		+ req.query.lat
		+ ','
		+ req.query.lng
		+ '?lang=sv&units=si&extend=hourly';
	req.pipe(request(url)).pipe(res);
});

app.get('/', function(req, res){
	res.sendFile('/index.html', {root: __dirname});
});

app.listen(process.env.PORT || 3000);