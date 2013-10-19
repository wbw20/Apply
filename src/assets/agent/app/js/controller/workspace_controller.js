App.WorkspaceController = Ember.Controller.extend({
  needs: ['application'],
  newtab: function(model) {
    this.get('controllers.application').newtab(model);
  }
});
