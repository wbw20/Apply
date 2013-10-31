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
  newtab: function(model) {
    this.set('content', []);
  },
  open: function(tab) {
    if (tab.model) {
      this.newtab(tab.model);
      this.transitionToRoute(tab.route, tab.model);
    }
  }
});
