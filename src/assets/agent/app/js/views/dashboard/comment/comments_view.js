import { App } from 'application';

App.CommentsView = Ember.CollectionView.extend({
  tagName: 'em',
  itemViewClass: App.CommentView
});
