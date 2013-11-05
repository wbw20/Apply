import { App } from '../../application'

App.PillView = Ember.View.extend({
  templateName: 'pill',
  tagName: 'em',
  click: function(event) {
    $('.pill').removeClass('active');
    $(event.target).closest('li').addClass('active');
  }
});
