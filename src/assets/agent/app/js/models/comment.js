App.Comment = Ember.Resource.define({
  url: '/v1/submission',
  schema: {
    id:    Number,
    created:  Date,
    title: String,
    body: String,
    creator: {
      type: App.Applicant
    }
  }
});
