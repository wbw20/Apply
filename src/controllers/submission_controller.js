var Submission = require('../models/submission').Submission;

module.exports = {
  setup: function(app) {
    app.get('/submission/:id?', function(req, res) {
      if (req.id) {
        Submission.find(req.id, function(error, data) {
          data.applicant(function(error, app) {
            var result = data.toObject();
            result.applicant = app.toObject();
            res.send(result);
          });
        });
      } else {
        Submission.all(function(error, submission) {
          Submission.include(submission, 'applicant', function(error, data) {
            res.send(data);
          });
        });
      }
    });

    app.post('/submission', function(req, res) {
      Submission.create(req.body, function(error) {
        if (error) {
          res.send(500, error);
        } else {
          res.send(200);
        }
      })
    });

    app.put('/submission', function(req, res) {
      //TODO
    });
  }
};
