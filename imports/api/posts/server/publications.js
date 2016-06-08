import { Meteor } from 'meteor/meteor';

import { Posts } from '../posts.js';

Meteor.publish('posts.userPosts', function(userId, limit) {
  return Posts.find({ "from._id": userId }, { sort: { createdAt: -1 }, limit });
});