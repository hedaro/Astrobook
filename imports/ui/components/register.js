import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './register.html';

Template.Register.events({
  'submit #register-form'(event, instance) {
    event.preventDefault();

    if (event.target.password.value !== event.target.confirm.value) {
      console.log("Passwords don't match");
      return;
    }

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
      firstName: event.target.first.value,
      lastName: event.target.last.value,
    }

    Meteor.call('users.insert', data, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }

    });
  },
});