App.Comment = Ember.Resource.define({
  url: '/v1/comments',
  schema: {
    id:    Number,
    created:  Date,
    creator: {
      type: App.Applicant
    },
    title: String,
    body: String
  }
});
