var Comment = require('../models/models').Comment;

module.exports = {
	setup: function(app){
    app.get('/v1/submission/:id?/comments', function(req, res) {
      if (req.params.id) {
        Comment.find({ submission: req.params.id }, function(error, data) {
            res.send(result);
        });
      } else {
        Comment.all({ include: 'applicant' }, function(error, data) {
          res.send(join(data));
        });
      }
    });

    app.post('/v1/submission/:id?/comments', function(req, res) {
      Comment.create(req.body, function(error, doc) {
        if (error) {
          res.send(500, error);
        } else {
          res.send(200, doc);
        }
      });
    });
	}
};