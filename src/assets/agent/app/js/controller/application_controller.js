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
      this.transitionToRoute(tab.route, tab.model);
    } else {
      this.transitionToRoute(tab.route);
    }
  },
  contains: function(newtab) {
    var content = this.get('content');
    for (i=0; i < content.length; i++) {
      if (!newtab.model) {
        return this._super(newtab);
      }
      if (newtab.route === content[i].route && newtab.model.id == content[i].model.id) {
        return true;
      }
    }

    return false;
  }
});
