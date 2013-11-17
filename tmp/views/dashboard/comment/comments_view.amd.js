define("views/dashboard/comment/comments_view", 
  ["application"],
  function(__dependency1__) {
    "use strict";
    var App = __dependency1__.App;

    App.CommentsView = Ember.View.extend({
      classNames: ['comments'],
      templateName: 'comments',
      submit: function(comment) {
        if (comment) {
          this.get('controller').submit(comment);
        } else {
          alert('enter some text, asshole');
        }
      }
    });
  });