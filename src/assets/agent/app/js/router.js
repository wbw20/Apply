App.Router.map(function() {
  this.resource('workspace');
  this.resource('profile');
});

App.WorkspaceRoute = Ember.Route.extend({
  model: function(params) {
    return [{
        name: "Will",
        major: "Computer Science",
        gpa: "3.0"
    }, {
        name: "Charles",
        major: "Barking",
        gpa: "4.0"
    }, {
        name: "Ginny",
        major: "Psychology premed",
        gpa: "3.5"
    }];
  },

  renderTemplate: function() {
    this.render({
      outlet: 'dashboard'
    });
  }
});
