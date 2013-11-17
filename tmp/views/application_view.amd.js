define("views/application_view", 
  ["application"],
  function(__dependency1__) {
    "use strict";
    var App = __dependency1__.App;

    App.ApplicationView = Ember.View.extend({
      tagName: 'em'
    });
  });