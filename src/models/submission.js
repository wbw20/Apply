var dao = require('../dao'),
    Applicant = require('./applicant').Applicant;

var Submission = dao.define('submission', {
    submitted: { type: Date, default: Date.now }
});

Submission.prototype.type = 'submission';

module.exports = {
  Submission: Submission
};

// 1665+east+115th+cleveland+ohio