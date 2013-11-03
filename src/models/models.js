var Submission = require('./submission').Submission,
    Applicant = require('./applicant').Applicant,
    SubmissionComment = require('./submission_comment').SubmissionComment;

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

Submission.hasMany('submission_comments', {
  as: 'comments',
  foreignKey: 'submissionId'
});

module.exports = {
  Applicant  : Applicant,
  Submission : Submission
};
