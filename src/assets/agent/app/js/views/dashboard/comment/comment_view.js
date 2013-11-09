import { App } from 'application';

App.CommentView = Ember.View.extend({
  templateName: 'comment',
  tagName: 'em'
});

App.CommentListView = Ember.CollectionView.extend({
  tagName: 'em',
  itemViewClass: App.CommentView
});
