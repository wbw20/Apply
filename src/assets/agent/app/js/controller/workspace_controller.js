App.WorkspaceController = Ember.Controller.extend({
  needs: ['application'],
  open: function(model) {
    this.get('controllers.application').open({
      name: model.applicant.first + model.applicant.last,
      route: 'submission',
      model: model
    });
  }
});
