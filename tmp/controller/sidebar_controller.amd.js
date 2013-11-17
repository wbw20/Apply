define("controller/sidebar_controller", 
  ["application"],
  function(__dependency1__) {
    "use strict";
    var App = __dependency1__.App;

    App.SidebarController = Ember.Controller.extend({
      select: function(pill) {
        if (!pill) { pill = 'workspace'; } //default
        var pillEl = $('#' + pill);
        if (pillEl.length > 0) {
          $('.pill').removeClass('active');
          pillEl.first().addClass('active');
        }
      }
    });
  });