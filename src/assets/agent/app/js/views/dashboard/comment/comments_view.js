import { App } from 'application';

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
