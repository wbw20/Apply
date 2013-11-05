var Submission = require('../models/models').Submission;
var Comment = require('../models/models').Comment;

function join(data) {
  var results = [];
  for (var i=0, l=data.length; i<l; i++) {
    var result = data[i].toObject();
    result.applicant = data[i].__cachedRelations.applicant.toObject();
    results.push(result);
  }

  return results;
}

module.exports = {
  setup: function(app) {
    app.get('/v1/submission/:id?', function(req, res) {
      if (req.id) {
        Submission.find(req.id, function(error, data) {
          data.applicant(function(error, applicant) {
            var result = data.toObject();
            result.applicant = applicant.toObject();
            result.comments = [
              {
                title: 'test',
                body: 'comment'
              }
            ];
            res.send(result);
          });
        });
      } else {
        Submission.all({ include: ['applicant'] }, function(error, data) {
          Submission.include(join(data), 'submission_comments', function(error, results) {
            res.send(join(results));
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

    app.put('/v1/submission', function(req, res) {
      //TODO
    });
  }
};
<<<<<<< HEAD


        // Submission.find(1, function(error, data) {
        //   data.applicant(function(error, applicant) {

        //     var result = data.toObject();
        //     result.applicant = applicant.toObject();
        //     Comment.find({ submisson: 1 }, function(err, docs) {
        //       debugger;
        //       result.comments = docs.toObject();
        //     });
        //   });
        // });
=======
>>>>>>> 8fa138c861ac8c11ad576cc40c73ae57f047cb72
