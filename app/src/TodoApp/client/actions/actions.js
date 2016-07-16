export const toggleComplete = (_id) => {
    return {
        type: "TOGGLE_TODO_COMPLETE",
        _id
    }
};

let nextTodoId = 0;
export const addTodo = (text) => {
    return {
        type: "ADD_TODO",
        text,
        _id: (nextTodoId ++).toString()
    }
};
