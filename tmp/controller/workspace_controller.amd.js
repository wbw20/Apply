define("controller/workspace_controller", 
  ["application"],
  function(__dependency1__) {
    "use strict";
    var App = __dependency1__.App;

    App.WorkspaceController = Ember.Controller.extend({
      needs: ['application'],
      open: function(model) {
        this.get('controllers.application').open({
          name: model.applicant.first + ' ' + model.applicant.last,
          route: 'submission',
          model: model
        });
      }
    });
  });