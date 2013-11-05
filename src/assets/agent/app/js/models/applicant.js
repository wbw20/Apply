import { App } from '../application';

App.Applicant = Ember.Resource.define({
  url: '/v1/applicant',
  schema: {
    id: Number,
    first: String,
    last: String
  }
});
