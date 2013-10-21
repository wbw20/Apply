var fs = require('fs'),
    orm = require('orm');

var credentials = JSON.parse(fs.readFileSync('conf/properties.json').toString());
var url = "mysql://" + credentials.db.username + ":" + credentials.db.password +
            "@" + credentials.db.host + "/" + credentials.db.database;

module.exports = Object.freeze({
  connect: function(callback) {
    orm.connect(url, function(error, connection) {
      callback(connection);
    });
  }
});
