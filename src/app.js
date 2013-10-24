var express = require('express'),
    ejs = require('ejs'),
    sass = require('node-sass'),
    fs = require('fs'),
    dao = require('./dao');

var Mincer = require('mincer');

var app = express();
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/assets'));
app.set('views', __dirname + '/assets');

var environment = new Mincer.Environment();
environment.appendPath(__dirname + '/assets');

/* Built agent assets */
var agentjs = environment.findAsset('agent/app/js/index.js').toString();
fs.writeFileSync(__dirname + "/assets/built/agent.js", agentjs);
var agenthtml = ejs.render(fs.readFileSync(__dirname + "/assets/agent/app/ejs/index.ejs").toString(), {
  filename: __dirname + "/assets/agent/app/ejs/index.ejs"
}).toString();

fs.writeFileSync(__dirname + "/assets/built/agent.html", agenthtml);
//TODO: sass assets

app.param('id', function(req, res, next, id) {
  if (id) {
    req.id = id;
  }

  next();
});

require('./controllers/submission_controller').setup(app);
require('./controllers/agent_controller').setup(app);
require('./controllers/applicant_controller').setup(app);

dao.autoupdate(function() {
});

app.get('/agent', function(req, res) {
  res.render('built/agent');
});

var connection = require('./dao');
require('./controllers/submission_controller');

app.listen(8080);
