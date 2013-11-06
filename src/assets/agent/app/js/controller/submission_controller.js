import { App } from 'application';

App.SubmissionController = Ember.ObjectController.extend({
  errors: {},
  init: function() {
  },
  submit: function() {
      // show loading icon
      // maybe: this.showLoading();
      var view = this;
      var comment = {
        title:this.get('title'),
        body: this.get('body')
      };
      // validate
      if(this.validate(comment)) {

          // add new comment to comments array
          this.get('content').comments.pushObject(comment);

          // update server

          // hide loading icon
          // maybe: this.hideLoading();

          // clear form
          // this.set('newCommment', {});
          this.set('title', '');
          this.set('body', '');
      } else {
          // hide loading icon
          // maybe: this.hideLoading();
          this.showErrors();
      }
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

App.CommentController = Ember.ResourceCollection.create({
  type: App.Comment,
  init: function(){
  },
  createComment: function(comment) {
    var comment = App.CommentController.create(comment);
    comment.save().done(function(){
      debugger;
    });
  }
});
