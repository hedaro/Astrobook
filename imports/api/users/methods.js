import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
  'users.insert'(data) {
    return Accounts.createUser(data);
  },
});