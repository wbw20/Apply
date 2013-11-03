var Submission = require('./submission').Submission,
    Applicant = require('./applicant').Applicant,
    Comment = require('./comment').Comment;

Submission.belongsTo('applicant', {
  model: Applicant
});

Applicant.hasMany('submissions', {
  foreignKey: 'applicantId'
});

Comment.belongsTo('submission', {
  model: Submission
});

Comment.belongsTo('agent', {
  foreignKey: 'agentId'
});

module.exports = {
  Applicant  : Applicant,
  Submission : Submission,
  Comment    : Comment
};
