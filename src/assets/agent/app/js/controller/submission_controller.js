App.SubmissionController = Ember.ObjectController.extend({
  newComment: {},
  errors: {},
  submit: function(comment) {
      // show loading icon
      // maybe: this.showLoading();

      // validate
      if(this.validate(comment)) {
          
          // send to server
          App.Comment.create(comment)
            .save()
            .done(function(){
              // hide loading icon
              // maybe: this.hideLoading();

              // refresh page
              // location.refresh();              
            });
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
