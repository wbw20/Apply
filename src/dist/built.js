window.App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

//= require agent/app/js/application.js
//= require agent/app/js/models/root.js
//= require agent/app/js/views/root.js
//= require agent/app/js/controller/root.js
//= require agent/app/js/router.js

App.Router.map(function() {
  this.resource('workspace');
  this.resource('submissions', function() {
    this.resource('submission', { path: "/:submission_id" });
  });
  this.resource('profile');
});

App.WorkspaceRoute = Ember.Route.extend({
  model: function() {
    return App.Submission.create().fetch();
  },

  renderTemplate: function() {
    this.render({
      outlet: 'dashboard'
    });
  }
});

App.SubmissionRoute = Ember.Route.extend({
  model: function(params) {
    return App.Submission.create({
      id: params.submission_id
    }).fetch();
  },
  renderTemplate: function(controller, model) {
    this.controllerFor('application').newtab(model);
    this.render({
      outlet: 'dashboard'
    });
  }
});

var open = [];

App.ApplicationController = Ember.Controller.extend({
  newtab: function(model) {
    if (!open.contains(model.id)) {
      $('#firsttab').after('<li class="active">' +
                             '<a href="#/submissions/' + model.id + '">' + model.name + '</a>' +
                           '</li>');
      open.push(model.id);
    }
  }
});

//= require agent/app/js/controller/application_controller.js
//= require agent/app/js/controller/workspace_controller.js
//= require agent/app/js/controller/submission_controller.js

App.SubmissionController = Ember.ObjectController.extend({
  actions: {
    submit: function(comment) {
        // validate
        if(this.validate()) {
            
            // send to server
            this.get('store').push('comment',comment);

            // refresh page
            // location.refresh();
        } else {
            this.showErrors();
        }
    }
  },
  submit: function(comment) {
      // validate
      if(this.validate()) {
          
          // send to server
          this.get('store').push('comment',comment);

          // refresh page
          // location.refresh();
      } else {
          this.showErrors();
      }
  },
  validate: function() {
      for (var i in this.comment) {
          if(this.comment[i] !== '') {
              this.errors.push({
                  input: i,
                  error: 'did not validate'
              });
              return false;
          }
      }
      // if no errors
      return true;
  },
  showErrors: function(){
      // show errors on correct inputs
      // if input is not in this.errors remove error if its in the DOM
  }
});

App.WorkspaceController = Ember.Controller.extend({
  needs: ['application'],
  newtab: function(model) {
    this.get('controllers.application').newtab(model);
  }
});

App.Applicant = Ember.Resource.define({
  url: '/v1/applicant',
  schema: {
    id: Number,
    first: String,
    last: String
  }
});

//= require agent/app/js/models/applicant.js
//= require agent/app/js/models/submission.js

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

//= require agent/app/js/views/dashboard/workspace/root.js

//= require agent/app/js/views/dashboard/workspace/workspace_view.js
//= require agent/app/js/views/dashboard/workspace/workspace_row_view.js
//= require agent/app/js/views/dashboard/workspace/submission_view.js

App.SubmissionView = App.WorkspaceRowView.extend({
  comment : {},
  templateName: 'submission'
});

App.WorkspaceRowView = Ember.View.extend({});

App.WorkspaceView = Ember.View.extend({
  view: function() {
    console.log("mhmm");
  }
});

App.HeaderView = Ember.View.extend({
  templateName: 'header'
});

//= require agent/app/js/views/row_view.js
//= require agent/app/js/views/root_view.js
//= require agent/app/js/views/header_view.js
//= require agent/app/js/views/dashboard/root.js

App.RootView = Ember.View.extend({
});

App.RowView = Ember.View.extend({
  mouseEnter: function(event) {
    $('li.focused').removeClass('focused');
    $(event.target).addClass('focused');
  },

  mouseLeave: function(event) {
    $(event.target).removeClass('focused');
  }
});
