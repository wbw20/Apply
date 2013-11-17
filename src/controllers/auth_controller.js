module.exports = {
  setup: function(app) {
    app.get('/login', function(req, res) {
      res.render('login');
    });

    app.post('/login', function(req, res) {
      var post = req.body;
      if (post.username == 'john' && post.password == 'johnspassword') {
        req.session.user_id = 1;
        res.redirect('/agent');
      } else {
        res.send('Bad user/pass');
      }
    });

    app.get('/logout', function(req, res) {
      delete req.session.user_id;
      res.redirect('/login');
    });
  }
}
