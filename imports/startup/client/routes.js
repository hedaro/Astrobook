import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import layouts and pages
import '../../ui/layouts/app-body.js';
import '../../ui/pages/home-page.js';
import '../../ui/pages/users-profile-page.js';

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'Home_page' });
  },
});

FlowRouter.route('/users/:_id', {
  name: 'Users.profile',
  action() {
    BlazeLayout.render('App_body', { main: 'Users_profile_page' });
  }
})