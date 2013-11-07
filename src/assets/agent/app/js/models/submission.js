import { App } from 'application';

App.SubmissionComment = Ember.Resource.define({
  url: '/v1/submission/comment',
  schema: {
    id:   Number,
    created: Date,
    title: String,
    body: String,
    submissionId: Number,
    agentId: Number
  }
});

App.Submission = Ember.Resource.define({
  url: '/v1/submission',
  schema: {
    id:    Number,
    submitted:  Date,
    applicant: {
      type: App.Applicant
    },
    submission_comments: {
      type: Ember.ResourceCollection,
      itemType: 'App.SubmissionComment',
      url: '/v1/submission/%@/comment'
    }
  }
});
