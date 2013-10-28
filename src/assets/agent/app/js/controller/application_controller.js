var open = [];

App.ApplicationController = Ember.Controller.extend({
  newtab: function(model) {
    if (!open.contains(model.id)) {
      $('#firsttab').after('<li class="active">' +
                             '<a href="#/submissions/' + model.id + '">' + model.applicant.first +
                             ' ' + model.applicant.last + '</a>' +
                           '</li>');
      open.push(model.id);
    }
  }
});
