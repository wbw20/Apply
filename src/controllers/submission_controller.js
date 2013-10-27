var Submission = require('../models/models').Submission;

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
          data.applicant(function(error, app) {
            var result = data.toObject();
            result.applicant = app.toObject();
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
      })
    });

    app.put('/v1/submission', function(req, res) {
      //TODO
    });
  }
};
