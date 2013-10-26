App.Applicant = Ember.Resource.define({
  url: '/applicant',
  schema: {
    id: Number,
    first: String,
    last: String
  }
});
