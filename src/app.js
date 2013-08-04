var express = require('express');

var app = express();

app.get('/agent', function(req, res) {
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.listen(8080);