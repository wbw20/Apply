import { App } from 'application';

App.AgentWidgetView = Ember.View.extend({
  templateName: 'agent_widget',
  model: function() {
    return {
      username: 'testing'
    };
  }
});
