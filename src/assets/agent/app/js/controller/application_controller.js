App.ApplicationController = Ember.ArrayController.extend({
  init: function() {
    this.set('content', [{
      name: "home",
      route: "index"
    }, {
      name: "new",
      route: "new"
    }]);
  },
  open: function(tab) {
    if (tab.model) {
      this.pushObject(tab);
      this.transitionToRoute(tab.route, tab.model);
    }
  }
});
