define("views/row_view", 
  ["application"],
  function(__dependency1__) {
    "use strict";
    var App = __dependency1__.App;

    App.RowView = Ember.View.extend({
      classNames: ['list-item', 'list-group-item'],
      tagName: 'li'
    });
  });