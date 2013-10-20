App.Router.map(function() {
  this.resource('workspace', function() {
    this.route("submission", { path: "/:submission_id" });
  });
  this.resource('profile');
});

App.WorkspaceRoute = Ember.Route.extend({
  model: function(params) {
    return [{
        id: 0,
        name: "Will",
        major: "Computer Science",
        gpa: "3.0"
    }, {
        id: 1,
        name: "Charles",
        major: "Barking",
        gpa: "4.0"
    }, {
        id: 2,
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

App.WorkspaceSubmissionRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({
      outlet: 'dashboard'
    });
  }
});
