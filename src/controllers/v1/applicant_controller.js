var Applicant = require('../../models/models').Applicant;

module.exports = {
  setup: function(app) {
    app.get('/v1/applicant/:id?', function(req, res) {
      if (req.id) {
        Applicant.find(req.id, function(error, data) {
          res.send(data);
        });
      } else {
        Applicant.all(function(error, data) {
          res.send(data);
        });
      }
    });

    app.post('/v1/applicant', function(req, res) {
      Applicant.create(req.body, function(error) {
        if (error) {
          res.send(500, error);
        } else {
          res.send(200);
        }
      })
    });

    app.put('/v1/applicant', function(req, res) {
      //TODO
    });
  }
};
