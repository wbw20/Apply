var dao = require('../dao');
require('../util/extend')

var User = dao.define('user', {
});

User.extend = Class.extend;

var Agent = User.extend({
});

var Applicant = User.extend({
});

module.exports = {
  Agent: Agent,
  Applicant: Applicant
};
