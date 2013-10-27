var Submission = require('./submission').Submission,
    Applicant = require('./applicant').Applicant;

Submission.belongsTo('applicant', {
  model: Applicant
});

Applicant.hasMany('submissions', {
  foreignKey: 'applicantId'
});

module.exports = {
  Applicant: Applicant,
  Submission: Submission
};
