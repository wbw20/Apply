var Applicant = require('../models/applicant').Applicant;

module.exports = {
  setup: function(app) {
    app.post('/applicant', function(req, res) {
      Applicant.create(req.body, function(error) {
        if (error) {
          res.send(500, error);
        } else {
          res.send(200);
        }
      });
    });
  }
};
