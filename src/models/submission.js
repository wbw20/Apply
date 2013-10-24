var dao = require('../dao'),
    Applicant = require('./user').Applicant;

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
