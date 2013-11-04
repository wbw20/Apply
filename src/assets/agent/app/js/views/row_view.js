App.RowView = Ember.View.extend({
  mouseEnter: function(event) {
    $('li.focused').removeClass('focused');
    $(event.target).addClass('focused');
    alert("NIGGERSSS");
  },

  mouseLeave: function(event) {
    $(event.target).removeClass('focused');
  }
});
