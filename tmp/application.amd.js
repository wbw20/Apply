define("application", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var App = Ember.Application.create({
      LOG_TRANSITIONS: true
    });

    __exports__.App = App;
  });