var bcrypt = require('bcrypt');
var Agent = require('../models/agent').Agent;

module.exports = {
  setup: function(app) {
    app.get('/login', function(req, res) {
      res.render('login');
    });

    app.post('/login', function(req, res) {
      var post = req.body;
      if (post.username == 'john' && post.password == 'johnspassword') {
        req.session.user_id = 1;
        res.redirect('/agent');
      } else {
        res.send('Bad user/pass');
      }
    });

    app.get('/logout', function(req, res) {
      delete req.session.user_id;
      res.redirect('/login');
    });

    app.get('/signup', function(req, res) {
      res.render('signup');
    });

    app.post('/signup', function(req, res) {
      req.body.salt = bcrypt.genSaltSync(10);
      req.body.password = bcrypt.hashSync(req.body.password, req.body.salt);
      Agent.create(req.body, function(error, agent) {
        if (error) {
          res.send(500, error);
        } else {
          req.session.user_id = agent.id;
          res.redirect('/agent');
        }
      });
    });
  }
}
