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
        // Mongoose pattern
        // Submission.populate('applicant')
        //   .populate('comments')
        //   .exec(function(err, submission) {});

        // async.js pattern
        // var request = [
        //   function(cb) {
        //     Submission.find(req.id, cb);
        //   },
        //   function(cb) {
        //     Applicant.find({ submission: req.id }, cb);
        //   },
        //   function(cb) {
        //     Comment.find({ submission: req.id }, cb);
        //   }
        // ];
        // async.parallel(request, function(data) {
        //   data[0].applicant = data[1];
        //   data[0].comments = data[2];
        //   res.json(data[0]);
        // });
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
        Submission.all({ include: 'applicant' }, function(error, data) {
          res.send(join(data));
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
