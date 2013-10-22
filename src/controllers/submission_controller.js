var Submission = require('../models/submission').Submission;

var sub = Submission({
  timestamp: Date.now()
});

sub.save();

module.exports = Object.freeze({
  
});
