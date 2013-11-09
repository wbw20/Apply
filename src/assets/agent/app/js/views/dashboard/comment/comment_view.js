import { App } from 'application';

App.CommentView = Ember.View.extend({
  templateName: 'comment',
  tagName: 'em'
});

App.CommentArea = Ember.TextArea.extend({
  classNames: ['comment-area'],
  placeholder: 'Add a comment...'
})

App.CommentListView = Ember.CollectionView.extend({
  tagName: 'em',
  itemViewClass: App.CommentView
});
