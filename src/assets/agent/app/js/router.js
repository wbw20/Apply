App.Router.map(function() {
  this.resource('workspace');
  this.resource('profile');
});

App.WorkspaceRoute = Ember.Route.extend({
  model: function() {
    return {
      title: "yayyyy"
    };
  },
  renderTemplate: function() {
    this._super();
    this.render("workspace", {
      outlet: 'dashboard'
    });
  }
});
