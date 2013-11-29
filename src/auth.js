var fs = require('fs'),
    express = require('express');

var checkAuthentication = function(req, res, next) {
  if (!req.session || !req.session.user_id) {
    res.redirect('/login');
  } else {
    next();
  }
}

var setup = function(app) {
  var credentials = JSON.parse(fs.readFileSync('conf/properties.json').toString());
  app.use(express.session({
    secret: credentials.session.secret
  }));
}

module.exports = {
  check: checkAuthentication,
  setup: setup
}
