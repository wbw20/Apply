var Submission = require('../models/submission').Submission;

module.exports = {
  setup: function(app) {
    app.get('/submission/:id?', function(req, res) {
      if (req.id) {
        Submission.find(req.id, function(error, data) {
          res.send(data);
        });
      } else {
        Submission.all(function(error, data) {
          res.send(data);
        });
      }
    });

    app.post('/submission', function(req, res) {
      Submission.create(function(error) {
        if (error) {
          res.send(500, error);
        } else {
          res.send(200);
        }
      })
    });
  }
};
