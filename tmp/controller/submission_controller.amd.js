define("controller/submission_controller", 
  ["application"],
  function(__dependency1__) {
    "use strict";
    var App = __dependency1__.App;

    App.SubmissionController = Ember.ObjectController.extend({
      submit: function() {
        var comment = App.SubmissionComment.create({
          body:  this.get('body'),
          submissionId: this.get('content').id
        });

        comment.save();
        this.get('content').submission_comments.pushObject(comment);
        this.set('body', '');
      }
    });
  });