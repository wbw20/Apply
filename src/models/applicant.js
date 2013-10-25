var dao = require('../dao');

var Applicant = dao.define('applicant', {
  first: { type: String, length: 32 },
  last:  { type: String, length: 32 }
});

module.exports = {
  Applicant: Applicant
};
