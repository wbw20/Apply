define("router", 
  ["application"],
  function(__dependency1__) {
    "use strict";
    var App = __dependency1__.App;

    App.Router.map(function() {
      this.route('new');
      this.resource('profile');
      this.resource('workspace');
      this.resource('submissions', function() {
        this.resource('submission', { path: "/:submission_id" });
      });
    });

    App.NewRoute = Ember.Route.extend({
      renderTemplate: function(controller) {
        this.render({
          outlet: 'dashboard'
        });
      }
    });

    App.ProfileRoute = Ember.Route.extend({
      renderTemplate: function(controller) {
        this.render({
          outlet: 'dashboard'
        });
      }
    });

    App.SubmissionRoute = Ember.Route.extend({
      model: function(params) {
        console.log(params.submission_id);
        return App.Submission.create({
          id: params.submission_id
        }).fetch();
      },
      renderTemplate: function(controller, model) {
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
  });