import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './insert-post.html';

import '../../api/posts/methods.js';

Template.Insert_post.events({
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
})