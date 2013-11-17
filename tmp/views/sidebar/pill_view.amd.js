define("views/sidebar/pill_view", 
  ["application"],
  function(__dependency1__) {
    "use strict";
    var App = __dependency1__.App;

    App.PillView = Ember.View.extend({
      templateName: 'pill',
      tagName: 'em',
      click: function(event) {
        $('.pill').removeClass('active');
        $(event.target).closest('li').addClass('active');
      }
    });
  });