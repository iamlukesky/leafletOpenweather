var express = require('express');  
var request = require('request');

var app = express();  
app.use('/proxy', function(req, res) {  
  var url = req.url.replace('/?url=', '');
  req.pipe(request(url)).pipe(res);
});

app.get('/', function(req, res){
	res.sendFile('/index.html', {root: __dirname});
});

app.listen(process.env.PORT || 3000);  