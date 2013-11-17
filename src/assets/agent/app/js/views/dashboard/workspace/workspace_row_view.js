import { App } from 'application';

App.WorkspaceRowView = App.RowView.extend({
  tagName: 'tr',
  classNames: ['aplcnt-list-view'],
  click: function(event) {
    this.get('controller').open(this.get('value'));
  }
});
