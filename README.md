#Astrobook
This project will be a basic social network (facebook clone) example created with **Meteor.js**, to demonstrate its functionallity and some of the patterns recommended for Meteor projects.

##App structure
The application structure is based on the [Meteor Guide](http://guide.meteor.com/structure.html) and the [Todos example application](https://github.com/meteor/todos).

Most of the code (templates, methods, collections, etc.) is contained in the `/imports` directory, with entry points for the client and server in `/client/main.js` and `/server/main.js` respectively.

Collections, publications and methods should be grouped by entities inside the `/imports/api` directory. Example:
```
  imports/
    api/
      posts/
        server/
          publications.js  // Posts related publications
        posts.js           // Collection and schema definition
        methods.js         // Posts related methods

      users/               // Similar structure
```

###TODO
-Remove `.gitignore` files once the folders contain actual files

##Routes, layouts and components
This project uses [kadira:flow-router](https://atmospherejs.com/kadira/flow-router) to handle client routes, and the complementary [kadira:blaze-layout](https://atmospherejs.com/kadira/blaze-layout) package to render blaze layout templates for the routes.

The application contains a single layout called **App_body**, defined inside the `/imports/ui/layouts` directory for all routes we create, with a `Template.dynamic` component to render the corresponding route's view. The view's template name is passed by the router with the `main` argument.

The template passed to BlazeLayout as `{main=page_name}` in each route should be a page component (saved in `/includes/ui/pages`) which handles data collection from the route and necessary subscriptions and then passes this data to the actual main view template (saved in `/imports/ui/components`). Any other reusable component should be saved in the same directory as the main views, though they could be grouped in separate sub-directories if needed, and they should only be called by a higher level template, being the _"page"_ componen the top level component.