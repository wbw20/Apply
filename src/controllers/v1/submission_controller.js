var Submission = require('../../models/models').Submission;
var Comment = require('../../models/models').Comment;
var util = require('../../util');

module.exports = {
  setup: function(app) {
    app.get('/v1/submission/:id?', function(req, res) {
      if (req.id) {
        Submission.find(req.id, function(error, data) {
          data.applicant(function(error, applicant) {
            data.submission_comments(function(error, comments) {
              var result = data.toObject();
              result.applicant = applicant.toObject();
              result.submission_comments = [];
              for (var i=0, l=comments.length; i<l; i++) {
                result.submission_comments.push(comments[i].toObject());
              }
              res.send(result);
            });
          });
        });
      } else {
        Submission.all({ include: ['applicant'] }, function(error, data) {
          Submission.include(data, 'submission_comments', function(error, results) {
            res.send(util.join(data));
          });
        });
      }
    });

    app.post('/v1/submission', function(req, res) {
      Submission.create(req.body, function(error) {
        if (error) {
          res.send(500, error);
        } else {
          res.send(200);
        }
      });
    });

    app.put('/v1/submission/:id', function(req, res) {
      //TODO
    });

    app.get('/v1/submission/:id/comment', function(req, res) {
      Submission.find(req.id, function(error, data) {
        data.submission_comments(function(error, comments) {
          res.send(comments);
        });
      });
    });

    app.post('/v1/submission/comment', function(req, res) {
      Submission.find(req.body.submissionId, function(error, data) {
        data.submission_comments.create(req.body, function(error) {
          if (error) {
            res.send(500, error);
          } else {
            res.send(200);
          }
        });
      });
    });

    app.put('/v1/submission/comment', function(req, res) {
      //TODO
    });
  }
};
