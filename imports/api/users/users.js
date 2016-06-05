import { Meteor } from 'meteor/meteor';

Meteor.users.deny({
  insert() { return true; },
  update() { return true; },
  update() { return true; },
});