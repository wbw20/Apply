App.Router.map(function () {
  this.resource('dashboard', { path: '/' });
  this.resource('menu', { path: '/menu' });
});

App.MenuRoute = Ember.Route.extend({
  renderTemplate: function(controller) {
    this.render('views/dashboard/menu', {controller: controller});
  }
});
