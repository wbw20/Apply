var dao = require('../dao');
require('../lib/extend');

var User = Class.extend(dao.define('user', {
  first: { type: String, length: 32 },
  last:  { type: String, length: 32 },
  role:  { type: String, length: 32 }
}));

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

dao.autoupdate(function() {
});

module.exports = {
  Agent: Agent,
  Applicant: Applicant
};
