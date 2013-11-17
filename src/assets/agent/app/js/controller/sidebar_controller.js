App.SidebarController = Ember.Controller.extend({
  select: function(pill) {
    if (!pill) { pill = 'workspace'; } //default
    var pillEl = $('#' + pill);
    if (pillEl.length > 0) {
      $('.pill').removeClass('active');
      pillEl.first().addClass('active');
    }
  }
});
