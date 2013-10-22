var dao = require('../dao');

var Submission = dao.define('Submission', {
    timestamp: Date
});

module.exports = Object.freeze({
  Submission: Submission
});
