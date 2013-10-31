App.Router.map(function() {
  this.resource('workspace');
  this.resource('submissions', function() {
    this.resource('submission', { path: "/:submission_id" });
  });
  this.resource('profile');
});

App.ApplicationRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('tabs', [{
      name: "home",
      route: "index"
    }, {
      name: "new",
      route: "new"
    }]);
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

App.SubmissionRoute = Ember.Route.extend({
  model: function(params) {
    return App.Submission.create({
      id: params.submission_id
    }).fetch();
  },
  renderTemplate: function(controller, model) {
    debugger
    // this.controllerFor('application').newtab(model);
    this.render({
      outlet: 'dashboard'
    });
  }
});
