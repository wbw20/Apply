define("views/dashboard/comment/comment_view", 
  ["application"],
  function(__dependency1__) {
    "use strict";
    var App = __dependency1__.App;

    App.CommentView = Ember.View.extend({
      classNames: ['comment'],
      templateName: 'comment',
      tagName: 'li'
    });

    App.CommentArea = Ember.TextArea.extend({
      classNames: ['comment-area'],
      placeholder: 'Add a comment...'
    })

    App.CommentListView = Ember.CollectionView.extend({
      classNames: ['noindent'],
      tagName: 'ul',
      itemViewClass: App.CommentView
    });
  });