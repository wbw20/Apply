var Submission = require('../models/submission').Submission;

module.exports = {
  setup: function(app) {
    app.get('/submission/:id?', function(req, res) {
      if (req.id) {
        res.send(req.id);
      } else {
        Submission.all(function(err, data) {
          res.send(data);
        });
      }
    });

    app.post('/submission', function(req, res) {
      //TODO
    });
  }
};
