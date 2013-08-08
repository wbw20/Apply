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
var agentjs = environment.findAsset('agent/app/index.js').toString();
fs.writeFileSync(__dirname + "/assets/built/agent.js", agentjs);
var agenthtml = ejs.render(fs.readFileSync(__dirname + "/assets/agent/app/views/index.html").toString()).toString();
fs.writeFileSync(__dirname + "/assets/built/agent.html", agenthtml);

app.get('/agent', function(req, res) {
  res.render('built/agent');
});

app.listen(8080);
