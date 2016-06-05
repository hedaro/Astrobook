import { Template } from 'meteor/templating';

import './app-body.html';

import '../components/login.js';

Template.App_body.events({
  'click #logout-button'(event, instance) {
    event.preventDefault();
    Meteor.logout();
  },
});