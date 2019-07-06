import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
Websites = new Mongo.Collection("websites");
import './main.html';

Template.addCommentForm.events({
 'click .js-add-site':function(event){
     var url = $('#comment_input').val();
     var user;
     if (Meteor.user()){
         user=Meteor.user().emails[0].address; 
     }
     else {
        user="anonymous person";
     }
    var site = {"url":url,
                 "createdOn":new Date(),
                 "createdBy":user};
     Websites.insert(site);
     return false;
 }
});

Template.CommentList.helpers({
    'all_websites':function(){
        return Websites.find({});
    },
    'safer_email':function(email){
        if (email.indexOf('@')!=-1){
            return email.split('@')[0];
        }
        else{
            return email;
        }
    }
});