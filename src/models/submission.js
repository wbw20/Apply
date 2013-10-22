var dao = require('../dao');

var Submission = dao.define('submission', {
    submitted: Date
});

dao.autoupdate(function() {
});

module.exports = {
  Submission: Submission
};
