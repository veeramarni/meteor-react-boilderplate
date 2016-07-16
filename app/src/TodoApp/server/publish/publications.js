import { Meteor } from 'meteor/meteor';
import Tasks from 'TodoApp/collections/Tasks';

Meteor.publish('tasks', function(){
    return Tasks.find({
        owner: this.userId
    })
});