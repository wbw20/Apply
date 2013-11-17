define("models/applicant", 
  ["application"],
  function(__dependency1__) {
    "use strict";
    var App = __dependency1__.App;

    App.Applicant = Ember.Resource.define({
      url: '/v1/applicant',
      schema: {
        id: Number,
        first: String,
        last: String
      }
    });
  });