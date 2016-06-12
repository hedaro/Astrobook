import { Meteor } from 'meteor/meteor';

import { Posts } from './posts.js';

Meteor.methods({
  'posts.insert'(text) {
    let user = Meteor.users.findOne(this.userId, {
      fields: {
        "profile.firstName": 1,
        "profile.lastName": 1,
      }
    });
    let from = {};
    from._id = this.userId;
    from.name = user.profile.firstName + ' ' + user.profile.lastName;
    Posts.insert({text, from});
  },
  'posts.likePost'(postId) {
    let user = Meteor.users.findOne(this.userId, {
      fields: {
        "profile.firstName": 1,
        "profile.lastName": 1,
      }
    });
    let from = {};
    from._id = this.userId;
    from.name = user.profile.firstName + ' ' + user.profile.lastName;

    if (Posts.find({_id: postId, "likes._id": {$in: [this.userId]}}).count() > 0) {
      Posts.update(postId, {$pull: {likes: from}});
    } else {
      Posts.update(postId, {$addToSet: {likes: from}});
    }
  },
});