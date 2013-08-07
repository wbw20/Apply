//= require agent/app/views/dashboard/menu_view.js

App = Ember.Application.create();

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

require(['app/views/dashboard/menu_view'], function(Menu) {
var container = Ember.ContainerView.create({
  childViews: []
});

App.Router.map(function() {
  this.resource('menu', { path: '/contacts/:contact_id' });
});

var w = 0;
});
