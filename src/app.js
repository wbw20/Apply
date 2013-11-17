var express = require('express'),
    fs = require('fs'),
    ejs = require('ejs'),
    dao = require('./dao');

var app = express();
app.engine('.html', ejs.__express);
app.use(express.static(__dirname + '/assets'));
app.use(express.bodyParser());
app.set('view engine', 'html');
app.set('views', __dirname + '/assets');

app.param('id', function(req, res, next, id) {
  if (id) req.id = id;
  next();
});

require('./controllers/submission_controller').setup(app);
require('./controllers/agent_controller').setup(app);
require('./controllers/applicant_controller').setup(app);
require('./controllers/comment_controller').setup(app);

dao.autoupdate(function() {});

app.get('/agent', function(req, res) {
  res.render('built/agent');
});

require('./controllers/submission_controller');

app.listen(8080);
