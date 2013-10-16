App.Router.map(function() {
  this.resource('workspace');
  this.resource('profile');
});

App.WorkspaceRoute = Ember.Route.extend({
  model: function(params) {
    return ['an app', 'another app'];
  }
});
