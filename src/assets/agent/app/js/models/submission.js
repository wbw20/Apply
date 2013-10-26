App.Submission = Ember.Resource.define({
  url: '/submission',
  schema: {
    id:    Number,
    submitted:  Date,
    applicant: {
      type: App.Applicant
    }
  }
});
