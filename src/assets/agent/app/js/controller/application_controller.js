var open = [];

App.ApplicationController = Ember.ArrayController.extend({
  newtab: function(model) {
    if (this.get('tabs').indexOf(model) != -1) {
      $('#firsttab').after('<li class="active">' +
                             '<a href="#/submissions/' + model.id + '">' + model.applicant.first +
                             ' ' + model.applicant.last + '</a>' +
                           '</li>');
      this.get('tabs').push(model);
    }
  },
  open: function(tab) {
    this.transitionToRoute(tab.route);
  }
});
