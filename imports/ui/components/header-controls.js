import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './header-controls.html';

Template.Header_controls.events({
  'click #logout-button'(event, instance) {
    event.preventDefault();
    Meteor.logout();
  },
  'submit #login-form'(event, instance) {
    event.preventDefault();
    Meteor.loginWithPassword(event.target.email.value, event.target.password.value, (err) => {
      if (err) {
        console.log(err);
      }
    });
  },
});