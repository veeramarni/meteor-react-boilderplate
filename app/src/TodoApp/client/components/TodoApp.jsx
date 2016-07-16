import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import ReactMixin from 'react-mixin';
import TodoList from './TodoList';

import Tasks from 'TodoApp/collections/Tasks';

@ReactMixin.decorate(ReactMeteorData)
export default class TodoApp extends Component {

    getMeteorData () {
        Meteor.subscribe('tasks');
        const tasks = Tasks.find({},{ sort: {createdAt: -1}}).fetch();
     return {
         tasks,
         user: Meteor.user()
     }
    }

    render() {
        return (
            <div className="container">
                <TodoHeader

                />
                <TodoList tasks={this.data.tasks} />
            </div>
        )

    }
}