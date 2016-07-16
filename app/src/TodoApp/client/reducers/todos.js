const todo = (state, action) => {

    switch(action.type) {
        case 'ADD_TODO':
            return {
               _id: action._id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO_COMPLETE':
            if(state._id !== action._id ){
                return state
            }
            return {
                ...state, completed: !state.completed,
            };
        default:
            return state;
    }
};


const todos = (state=[], action ) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, todo(undefined,action),];
        case 'TOGGLE_TODO_COMPLETE':
            return state.map( t => todo(t, action));

        default:
            return state
    }
};

export default todos;


