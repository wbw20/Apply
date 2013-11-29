var bcrypt = require('bcrypt');
var Agent = require('../models/models').Agent;

module.exports = {
  setup: function(app) {
    app.get('/login', function(req, res) {
      res.render('login');
    });

    app.post('/login', function(req, res) {
      Agent.findOne({
        where: {
          username: req.body.username
        }
      }, function(error, agent) {
        if (error || !agent) {
          res.send(error);
        } else {
          bcrypt.compare(req.body.password, agent.password, function(err, result) {
            var post = req.body;
            if (result) {
              req.session.user_id = agent.id;
              res.redirect('/agent');
            } else {
              res.send('Bad user/pass');
            }
          });
        }
      });
    });

    app.get('/signout', function(req, res) {
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
