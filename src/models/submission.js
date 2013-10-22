var dao = require('../dao');

var Submission = dao.define('submission', {
    timestamp: Date
});

dao.autoupdate(function() {
});

module.exports = {
  Submission: Submission
};
