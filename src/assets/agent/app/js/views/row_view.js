import { App } from '../application'

App.RowView = Ember.View.extend({
  mouseEnter: function(event) {
    $('li.focused').removeClass('focused');
    $(event.target).addClass('focused');
  },

  mouseLeave: function(event) {
    $(event.target).removeClass('focused');
  } 
});
