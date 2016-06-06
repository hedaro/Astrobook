import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import '../components/users-profile.js';

import './users-profile-page.html';

Template.Users_profile_page.onCreated(function() {
  this.getUserId = () => FlowRouter.getParam('_id');

  this.autorun(() => {
    this.subscribe('users.profile', this.getUserId());
  });
});

Template.Users_profile_page.helpers({
  userProfile() {
    const instance = Template.instance();
    const userId = instance.getUserId();
    return Meteor.users.findOne(userId);
  },
});