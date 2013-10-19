App.WorkspaceRowView = App.RowView.extend({
  click: function(event) {
    this.get('controller').newtab();
  }
});
