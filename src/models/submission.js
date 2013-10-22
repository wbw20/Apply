var dao = require('../dao');

var Submission = dao.define('submission', {
    submitted: { type: Date, default: Date.now }
});

dao.autoupdate(function() {
});

module.exports = {
  Submission: Submission
};
