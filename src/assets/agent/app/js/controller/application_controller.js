var open = [];

App.ApplicationController = Ember.Controller.extend({
  newtab: function(model) {
    if (!open.contains(model.id)) {
      $('#tabroot').append('<li class="active">' +
                             '<a href="#/submissions/' + model.id + '">' + model.name + '</a>' +
                           '</li>');
      open.push(model.id);
    }
  }
});
