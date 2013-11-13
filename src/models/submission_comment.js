var dao = require('../dao');

var SubmissionComment = dao.define('submission_comment', {
  created: { type: Date, default: Date.now },
  body   : { type: String, length: 32 } // how do I tell juggling this is text?
});

module.exports = {
  SubmissionComment: SubmissionComment
};
