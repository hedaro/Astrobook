import { Meteor } from 'meteor/meteor';

Meteor.publish('users.profile', function(userId) {
  return Meteor.users.find({_id: userId});
});