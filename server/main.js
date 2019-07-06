import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Websites = new Mongo.Collection('websites');
Meteor.startup(() => {
  // code to run on server at startup
});
