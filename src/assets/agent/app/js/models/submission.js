import { App } from 'application';

App.Submission = Ember.Resource.define({
  url: '/v1/submission',
  schema: {
    id:    Number,
    submitted:  Date,
    applicant: {
      type: App.Applicant
    }
  }
});
