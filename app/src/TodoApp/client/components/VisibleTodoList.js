import React from 'react';
import TodoList from './TodoList';
import { connect } from 'react-apollo';
import { withRouter } from 'react-router';
import { toggleComplete } from '../actions/actions';


const getVisibleTodo = (todos, filter) => {
    switch(filter){
        case "all":
            return todos;
        case "completed":
            return todos.filter( t => t.completed);
        case "active":
            return todos.filter( t => !t.completed);
        default:
            throw new Error(`Unknown filter: ${filter}.`);
    }
};

const mapStateToProps = (state, props) => ({
    todos: getVisibleTodo(state.todos, props.params.filter || 'all')
});

const mapDispatchToProps = (dispatch) =>  ({
        onTodoClick: (id) => dispatch(toggleComplete(id))
});


const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList));

export default VisibleTodoList;