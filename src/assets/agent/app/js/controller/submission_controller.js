import { App } from 'application';

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
