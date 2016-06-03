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