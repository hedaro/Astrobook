import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './login.html';

Template.Login.events({
  'submit #login-form'(event, instance) {
    event.preventDefault();
    Meteor.loginWithPassword(event.target.email.value, event.target.password.value, (err) => {
      if (err) {
        console.log(err);
      }
    });
  },
});