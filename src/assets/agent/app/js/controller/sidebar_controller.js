App.SidebarController = Ember.Controller.extend({
  select: function(pill) {
    if (!pill) { pill = 'workspace'; } //default
    var pill = $('#' + pill);
    if (pill.length > 0) {
      $('.pill').removeClass('active');
      pill.first().addClass('active');
    }
  }
});
