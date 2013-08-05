var express = require('express');
var ejs = require('ejs');

var app = express();
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/static');

app.get('/agent', function(req, res) {
  res.render('agent');
  console.log(express.static());
});

app.listen(8080);
