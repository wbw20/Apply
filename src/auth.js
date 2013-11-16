var checkAuthentication = function(req, res, next) {
  if (!req.session.user_id) {
    res.send(403);
  } else {
    next();
  }
}

module.exports = {
  check: checkAuthentication
}
