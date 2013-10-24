var dao = require('../dao');

var User = dao.define('user', {
});

var Agent = User.extend({
});

var Applicant = User.extend({
});

module.exports = {
  Agent: Agent,
  Applicant: Applicant
};
