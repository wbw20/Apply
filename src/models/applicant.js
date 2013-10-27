var dao = require('../dao'),
    Submission = require('./submission').Submission;

var Applicant = dao.define('applicant', {
  first: { type: String, length: 32 },
  last:  { type: String, length: 32 }
});

module.exports = {
  Applicant: Applicant
};
