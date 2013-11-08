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
  },
  validate: function(comment) {
      for (var i in comment) {
          if(comment[i] === '') {
              this.errors.push({
                  input: i,
                  error: 'did not validate'
              });
              return false;
          }
      }
      // if no errors
      return true;
  },
  showErrors: function(){
      // show errors on correct inputs
      // if input is not in this.errors remove error if its in the DOM
  }
});
