App.HeaderView = Ember.View.extend({
  templateName: 'header',
  click: function(event) {
    if ($(event.target)[0].id == 'newtab') {
      $('#tabroot').append('<li class="active">' +
                             '<a href="#">Home</a>' +
                           '</li>');
    }
  }
});
