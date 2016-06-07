import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Posts } from '../../api/posts/posts.js';

import '../components/users-profile.js';

import './users-profile-page.html';

Template.Users_profile_page.onCreated(function() {
  this.getUserId = () => FlowRouter.getParam('_id');

  this.autorun(() => {
    this.subscribe('users.profile', this.getUserId());
    this.subscribe('posts.userPosts', this.getUserId());
  });
});

Template.Users_profile_page.helpers({
  userArgs(){
    const instance = Template.instance();
    const userId = instance.getUserId();
    return {
      user: Meteor.users.findOne(userId),
      posts: Posts.find().fetch(),
    }
  },
});