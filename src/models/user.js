var dao = require('../dao');

var Agent = Class.extend(dao.define('agent', {
  first: { type: String, length: 32 },
  last:  { type: String, length: 32 }
}));

var Applicant = Class.extend(dao.define('agent', {
  first: { type: String, length: 32 },
  last:  { type: String, length: 32 }
}));

module.exports = {
  Agent: Agent,
  Applicant: Applicant
};
