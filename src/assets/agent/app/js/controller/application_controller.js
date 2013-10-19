App.ApplicationController = Ember.Controller.extend({
  newtab: function() {
    $('#tabroot').append('<li class="active">' +
                           '<a href="#">Home</a>' +
                         '</li>');
  }
});
