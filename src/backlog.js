var _ = require('underscore'),
    log = require('monk')('mongodb://admin:apply@dharma.mongohq.com:10072/ap-docstore').get('log');


var log = function(agent_id, model) {
  // this === submission being saved

  var sub = _.extend(_.clone(model.toObject()),{
    agent: agent_id,
    type: model.type,
    changed: Date.now()
  });

  var plog = log.insert(sub);
};

module.exports = {
  log: log
};
