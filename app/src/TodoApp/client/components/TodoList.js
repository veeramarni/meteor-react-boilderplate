import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo._id}
                {...todo}
                onClick={ () => onTodoClick(todo._id)}
            />
        )}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;