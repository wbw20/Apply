// TODO: test me
function join(data) {
  var results = [];
  for (var i=0, l=data.length; i<l; i++) {
    var result = data[i].toObject();

    if (data[i].__cachedRelations) {
      for (property in data[i].__cachedRelations) {
        if(Object.prototype.toString.call(data[i].__cachedRelations[property]) === '[object Array]') {
          var relations = [];
          for (var j=0, p=data[i].__cachedRelations[property].length; j<p; j++) {
            relations.push(data[i].__cachedRelations[property][j].__data);
          }
          result[property] = relations;
        } else {
          result[property] = data[i].__cachedRelations[property].__data;
        }
      }
    }

    results.push(result);
  }

  return results;
}

module.exports = {
  join: join
};
