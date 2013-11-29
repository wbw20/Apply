import { App } from 'application';

App.Agent = Ember.Resource.define({
  url: '/v1/agent',
  schema: {
    id: Number,
    first: String,
    last: String,
    username: String,
    email: String
  }
});
