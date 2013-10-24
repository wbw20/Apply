var dao = require('../dao');
require('../util/extend');

var User = dao.define('user', {
  first: { type: String, length: 32 },
  last:  { type: String, length: 32 },
  role:  { type: String, length: 32 }
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
