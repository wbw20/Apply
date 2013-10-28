var open = [];

App.ApplicationController = Ember.ArrayController.extend({
  newtab: function(model) {
    if (open.indexOf(parseInt(model.id)) == -1) {
      $('#firsttab').after('<li class="active">' +
                             '<a href="#/submissions/' + model.id + '">' + model.applicant.first +
                             ' ' + model.applicant.last + '</a>' +
                           '</li>');
      open.push(parseInt(model.id));
    }
  },
  open: function(tab) {
    debugger
  }
});
