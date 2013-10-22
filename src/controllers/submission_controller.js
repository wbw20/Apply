var Submission = require('../models/submission').Submission;

module.exports = {
  setup: function(app) {
    app.get('/submission', function(req, res) {
      res.send([]);
    });
  }
};
