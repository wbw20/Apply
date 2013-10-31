App.ApplicationController = Ember.ArrayController.extend({
  init: function() {
    this.set('content', [{
      name: "Home",
      route: "index"
    }, {
      name: "New",
      route: "new"
    }]);
  },
  open: function(tab) {
    if (!this.contains(tab)) {
      this.pushObject(tab);
    }

    if (tab.model) {
      this.transitionToRoute(tab.route, tab.model);
    } else {
      this.transitionToRoute(tab.route);
    }
  },
  contains: function(tab) {
    var content = this.get('content');

    if (!tab.model) {
      return this._super(tab);
    }

    for (i=0; i < content.length; i++) {
      if (tab.route === content[i].route && tab.model.id == content[i].model.id) {
        return true;
      }
    }

    return false;
  }
});
