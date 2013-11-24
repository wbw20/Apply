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
  }
};
