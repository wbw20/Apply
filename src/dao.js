module.exports = Object.freeze(
  (function(credentials) {
    return Bookshelf.initialize({
      client: 'mysql',
      connection: {
        host     : credentials.db.host,
        user     : credentials.db.user,
        password : credentials.db.password,
        database : credentials.db.database,
        charset  : 'utf8'
      }
    });
  }(JSON.parse(fs.readFileSync('../conf/properties.json').toString())))
);
