var express = require('express'),
    fs = require('fs'),
    ejs = require('ejs'),
    dao = require('./dao');
    auth = require('./auth');

var app = express();
app.engine('.html', ejs.__express);
app.use(express.static(__dirname + '/assets'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.set('view engine', 'html');
app.set('views', __dirname + '/assets');
auth.setup(app);

app.param('id', function(req, res, next, id) {
  if (id) req.id = id;
  next();
});

require('./controllers/v1/submission_controller').setup(app);
require('./controllers/v1/agent_controller').setup(app);
require('./controllers/v1/applicant_controller').setup(app);
require('./controllers/v1/comment_controller').setup(app);

require('./controllers/auth_controller').setup(app);

dao.autoupdate(function() {});

app.get('/agent', auth.check, function(req, res) {
  res.render('built/agent');
});

app.listen(8080);
