import React, { PropTypes } from 'react';


const Todo = ({onClick, text, completed}) => {


    let style = {textDecoration: completed ? 'line-through' : 'none'};
    return (
        <li onClick={onClick} style={style}>{text} </li>
    )
};

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};


export default Todo;