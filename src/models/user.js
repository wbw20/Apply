var dao = require('../dao');

var User = dao.define('user', {
});

var Agent;
var Applicant;

module.exports = {
  Agent: Agent,
  Applicant: Applicant
};
