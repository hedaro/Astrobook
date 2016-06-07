import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Posts = new Mongo.Collection('Posts');

Posts.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

let From = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  name: {
    type: String,
  }
});

Posts.schema = new SimpleSchema({
  text: {
    type: String,
  },
  likes: {
    type: [From],
    defaultValue: [],
  },
  from: {
    type: From,
    denyUpdate: true,
  },
  createdAt: {
    type: Date,
    denyUpdate: true,
    autoValue() {
      return new Date();
    },
  },
  parentId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true,
  },
});

Posts.attachSchema(Posts.schema);