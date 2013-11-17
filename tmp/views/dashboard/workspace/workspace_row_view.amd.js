define("views/dashboard/workspace/workspace_row_view", 
  ["application"],
  function(__dependency1__) {
    "use strict";
    var App = __dependency1__.App;

    App.WorkspaceRowView = App.RowView.extend({
      tagName: 'tr',
      classNames: ['aplcnt-list-view'],
      click: function(event) {
        this.get('controller').open(this.get('value'));
      }
    });
  });