var tabs = [];

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
    if (!this.contains(tab)) {
      tabs.push(tab);
      this.pushObject(tab);
    }

    this.transitionToRoute(tab.route, tab.model);
  },
  contains: function(newtab) {
    var content = this.get('content');
    for (i=0; i < content.length; i++) {
      if (newtab.route === content[i].route && newtab.model.id == content[i].model.id) {
        return true;
      }
    }

    return false;
  }
});
