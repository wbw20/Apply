import { App } from 'application';

App.WorkspaceRowView = App.RowView.extend({
  click: function(event) {
    this.get('controller').open(this.get('value'));
  }
});
