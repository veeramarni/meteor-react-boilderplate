import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

const AddTodo = ({dispatch}) => {
    let input;
    let onSubmit = (e) => {
        e.preventDefault();
        if (!input.value.trim()) {
            return;
        }
        dispatch(addTodo(input.value));
        input.value = "";
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input ref={node => {input = node; }} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
};

AddTodo.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect()(AddTodo);