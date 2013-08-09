App.Router.map(function () {
  this.resource('workspace', { path: '/' });
});

App.WorkspaceRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: 'workspace' });
  }
});
