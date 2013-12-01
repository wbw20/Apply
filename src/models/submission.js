var dao = require('../dao'),
    Applicant = require('./applicant').Applicant,
    _ = require('underscore');

var log = require('monk')('localhost/ap_backlog').get('log');

var Submission = dao.define('submission', {
    submitted: { type: Date, default: Date.now }
});

Submission.afterSave = function(next) {
	// this === submission being saved

	var sub = _.extend(_.clone(this.__data),{
		changed: Date.now(),
		type: 'submission'
	});

	var plog = log.insert(sub);

	next();
};

module.exports = {
  Submission: Submission
};

// 1665+east+115th+cleveland+ohio