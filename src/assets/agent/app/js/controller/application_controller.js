App.ApplicationController = Ember.Controller.extend({
  newtab: function(model) {
    $('#tabroot').append('<li class="active">' +
                           '<a href="#">Home</a>' +
                         '</li>');
  }
});
