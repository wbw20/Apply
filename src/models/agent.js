var dao = require('../dao');

var Agent = dao.define('agent', {
  first: { type: String, length: 32 },
  last:  { type: String, length: 32 }
});

module.exports = {
  Agent: Agent
};
