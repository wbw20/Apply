var fs = require('fs'),
    Schema = require('jugglingdb').Schema;

var credentials = JSON.parse(fs.readFileSync('conf/properties.json').toString());
var schema = new Schema('mysql', {
  host: credentials.db.host,
  port: credentials.db.port,
  database: credentials.db.database,
  username: credentials.db.username,
  password: credentials.db.password
});

module.exports = schema;
