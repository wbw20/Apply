App.RowView = Ember.View.extend({
  mouseEnter: function(event) {
    $(event.target).addClass("focused");
  },

  mouseLeave: function(event) {
    $(event.target).removeClass("focused");
  }
});
