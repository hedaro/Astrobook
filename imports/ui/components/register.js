import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

import './register.html';

Template.Register.events({
  'submit #register-form'(event, instance) {
    event.preventDefault();

    if (event.target.password.value !== event.target.confirm.value) {
      console.log("Passwords don't match");
      return;
    }

    const options = {};
    options.email = event.target.email.value;
    options.password = event.target.password.value;
    options.profile = {
      firstName: event.target.first.value,
      lastName: event.target.last.value,
    };

    Accounts.createUser(options, (err) => {
      if (err) {
        console.log(err.error);
      }
    });
  },
});