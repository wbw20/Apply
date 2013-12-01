var Submission = require('../models/models').Submission;
var Comment = require('../models/models').Comment;
var util = require('../util');

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


// create logs
// Submission.create({
//   applicantId: '9875'
// }, function(err, model) {
//   model.applicantId = '3456';
//   model.save(function(err) {
//   });
// });

// query logs
var log = require('monk')('localhost/ap_backlog').get('log');

// get last 10 changes from one submission
// log.find({
//   type: 'submission'
// }, { limit: 10 }).success(function(docs) {
//   console.log(docs);
// }).error(function(err) {
//   console.log(err);
// });


// find latest from each submission
log.find({
  type: 'submission'
}).each(function(doc) {
  if(!this.reduce) this.reduce = {};

  if(!this.reduce[doc.id] || this.reduce[doc.id].changed < doc.changed) {
    this.reduce[doc.id] = doc;
  }
}).success(function(){
  console.log(this.reduce);
});
