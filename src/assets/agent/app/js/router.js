App.Router.map(function () {
  this.resource('index', { path: '/' });
  this.resource('workspace', { path: '/workspace' });
});

App.WorkspaceRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: 'workspace' });
  }
});
