var express = require('express'),
    ejs = require('ejs'),
    sass = require('node-sass'),
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
var agenthtml = ejs.render(fs.readFileSync(__dirname + "/assets/agent/app/views/index.ejs").toString(), {
  filename: __dirname + "/assets/agent/app/views/index.ejs"
}).toString();
fs.writeFileSync(__dirname + "/assets/built/agent.html", agenthtml);
//TODO: sass assets

app.get('/agent', function(req, res) {
  res.render('built/agent');
});

app.listen(8080);
