import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './post-item.html';

import '../../api/posts/methods.js';

Template.Post_item.events({
  'click #like-button'(event, instance) {
    event.preventDefault();
    Meteor.call('posts.likePost', this._id);
  },
});

Template.Post_item.helpers({
  likeText() {
    let likeText = "Like";
    if (Meteor.userId() && this.likes.find(like => like._id === Meteor.userId()) ) {
      likeText = "Unlike";
    }

    return likeText;
  }
});