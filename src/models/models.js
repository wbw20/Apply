var Submission = require('./submission').Submission,
    Applicant = require('./applicant').Applicant,
    Comment = require('./submission_comment').SubmissionComment;

Submission.belongsTo('applicant', {
  model: Applicant
});

Applicant.hasMany('submissions', {
  foreignKey: 'applicantId'
});

SubmissionComment.belongsTo('submission', {
  model: Submission
});

SubmissionComment.belongsTo('agent', {
  foreignKey: 'agentId'
});

Submission.hasMany('comments', {
  foreignKey: 'submissionId'
});

module.exports = {
  Applicant  : Applicant,
  Submission : Submission,
  Comment    : Comment
};
