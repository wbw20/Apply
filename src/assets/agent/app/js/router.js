App.Router.map(function() {
  this.resource('workspace');
  this.resource('submissions', function() {
    this.resource('submission', { path: "/:submission_id" });
  });
  this.resource('profile');
});

App.SubmissionRoute = Ember.Route.extend({
  model: function(params) {
    console.log(params.submission_id);
    return App.Submission.create({
      id: params.submission_id
    }).fetch();
  },
  renderTemplate: function(controller, model) {
    // this.controllerFor('application').newtab(model);
    this.render({
      outlet: 'dashboard'
    });
  }
});

App.WorkspaceRoute = Ember.Route.extend({
  model: function() {
    return App.Submission.create().fetch();
  },
  renderTemplate: function() {
    this.render({
      outlet: 'dashboard'
    });
  }
});
