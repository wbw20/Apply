//= require agent/app/router.js
//= require agent/app/views/dashboard/menu_view.js

window.App = Ember.Application.create();

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

require(['app/views/dashboard/menu_view'], function(Menu) {
var container = Ember.ContainerView.create({
  childViews: []
});

var w = 0;
});
