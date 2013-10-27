var dao = require('../dao'),
    Applicant = require('./applicant').Applicant;

var Submission = dao.define('submission', {
    submitted: { type: Date, default: Date.now }
});

module.exports = {
  Submission: Submission
};
