var Agent = require('../../models/models').Agent;

module.exports = {
  setup: function(app) {
    app.get('/v1/agent/:id?', function(req, res) {
      if (req.id) {
        Agent.find(req.id, function(error, data) {
          res.send(data);
        });
      } else {
        Agent.all(function(error, data) {
          res.send(data);
        });
      }
    });

    app.get('/v1/me', function(req, res) {
      if (!req.session || !req.session.user_id) {
        res.send(404);
      } else {
        Agent.find(req.session.user_id, function(error, data) {
          var result = data.toObject();
          delete result.password;
          res.send(result);
        });
      }
    });
  }
};
