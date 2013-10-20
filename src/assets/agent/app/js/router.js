App.Router.map(function() {
  this.resource('workspace');
  this.resource('submissions', function() {
    this.resource('submission', { path: "/:submission_id" });
  });
  this.resource('profile');
});

var fakedata = [{
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
    }, {
        id: 3,
        name: "Clarence Pine",
        major: "Ping Pong",
        gpa: "3.5"
    }, {
        id: 4,
        name: "Margaret Shingle",
        major: "Botony",
        gpa: "1.7"
    }, {
        id: 5,
        name: "Shackleford Davinci",
        major: "Plant Physics",
        gpa: "0.4"
    }];

App.WorkspaceRoute = Ember.Route.extend({
  model: function() {
    return fakedata;
  },

  renderTemplate: function() {
    this.render({
      outlet: 'dashboard'
    });
  }
});

App.SubmissionRoute = Ember.Route.extend({
  model: function(params) {
    return fakedata[params.submission_id];
  },
  renderTemplate: function(controller, model) {
    this.controllerFor('application').newtab(model);
    this.render({
      outlet: 'dashboard'
    });
  }
});
