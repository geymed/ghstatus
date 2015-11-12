var express = require('express')
var ghstatus = require ('./api')
var Q = require('q');

var app = express();

// Register `hbs.engine` with the Express app.
app.use(express.static('public'));
app.get('/',function (req,res) {
 	res.render('/index.html');
});
	

app.get('/api/status', function (req,res) {
	ghstatus.status().then(function(status){
		res.json(status);
	});
});



app.get('/api/messages', function (req,res) {
	ghstatus.messages().then(function(messages) {
		res.json(messages);
	});
});

//start server on port 3000
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('GitHub Status app listening at http://%s:%s', host, port);
 });