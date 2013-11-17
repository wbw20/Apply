define("views/dashboard/workspace/submission_view", 
  ["application"],
  function(__dependency1__) {
    "use strict";
    var App = __dependency1__.App;

    App.SubmissionView = Ember.View.extend({
      templateName: 'submission'
    });
  });