var dao = require('../dao'),
    Applicant = require('./applicant').Applicant;

var Submission = dao.define('submission', {
    submitted: { type: Date, default: Date.now },
    applicantId: Number
});

Submission.belongsTo(Applicant, {
  as: 'applicant',
  foreignKey: 'applicantId'
});

module.exports = {
  Submission: Submission
};
