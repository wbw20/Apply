var express = require('express'),
    ejs = require('ejs'),
    fs = require('fs');

var Mincer = require('mincer');

var app = express();
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/assets'));
app.set('views', __dirname + '/assets');

var environment = new Mincer.Environment();
environment.appendPath(__dirname + '/assets');

/* Built agent assets */
var agent = environment.findAsset('agent/app/application.js').toString();
fs.writeFileSync(__dirname + "/assets/built/agent.js", agent);

app.get('/agent', function(req, res) {
  res.render('agent/app/views/index');
});

app.listen(8080);
