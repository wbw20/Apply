App.ApplicationController = Ember.Controller.extend({
  newtab: function(model) {
    $('#tabroot').append('<li class="active">' +
                           '<a href="#/submissions/' + model.id + '">' + model.name + '</a>' +
                         '</li>');
  }
});
