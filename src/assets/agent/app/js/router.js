App.Router.map(function () {
  this.resource('index', { path: '/' }, function() {
    this.route('workspace');
  });
});
