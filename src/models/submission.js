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

dao.autoupdate(function() {
});

module.exports = {
  Submission: Submission
};
