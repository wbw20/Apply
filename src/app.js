var express = require('express');
var ejs = require('ejs');

var app = express();
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/static');

app.get('/agent', function(req, res) {
  res.render('agent/views/index');
});

app.listen(8080);
