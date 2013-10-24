var dao = require('../dao');
require('../util/extend');

var User = dao.define('user', {
  first: { type: String, length: 32 },
  last:  { type: String, length: 32 },
  role:  { type: String, length: 32 }
});

User.extend = Class.extend;

var Agent = User.extend({
  create: function(properties) {
    properties.role = 'agent';
    this._super(properties);
  }
});

var Applicant = User.extend({
  create: function(properties) {
    properties.role = 'applicant';
    this._super(properties);
  }
});

module.exports = {
  Agent: Agent,
  Applicant: Applicant
};
