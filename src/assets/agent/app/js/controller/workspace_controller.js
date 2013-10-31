App.WorkspaceController = Ember.Controller.extend({
  needs: ['application'],
  open: function(model) {
    this.get('controllers.application').open({
      name: model.first,
      route: 'submission',
      model: model
    });
  }
});
