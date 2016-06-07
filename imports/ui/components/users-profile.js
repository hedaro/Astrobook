import { Template } from 'meteor/templating';

import './users-profile.html';

import '../../api/posts/methods.js';

Template.Users_profile.onCreated(function () {
  console.log(this.data.posts);
});

Template.Users_profile.events({
  'submit #new-post'(event, instance) {
    event.preventDefault();
    Meteor.call('posts.insert', event.target.text.value, (err, res) => {
      if (err) {
        console.log(err.reason);
      } else {
        event.target.text.value = '';
      }
    });
  },
});