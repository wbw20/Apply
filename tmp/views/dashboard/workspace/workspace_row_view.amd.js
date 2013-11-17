define("views/dashboard/workspace/workspace_row_view", 
  ["application"],
  function(__dependency1__) {
    "use strict";
    var App = __dependency1__.App;

    App.WorkspaceRowView = App.RowView.extend({
      click: function(event) {
        this.get('controller').open(this.get('value'));
      }
    });
  });