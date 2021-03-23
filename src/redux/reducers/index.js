import { ADD_TODO, DELETE_TODO, GET_TODOS } from "../constants/action-types";

const initialState = {
    books: [{name: "marc", age: 21}],
    todos: []
};

function rootReducer(state = initialState, action){
    switch(action.type) {
        case ADD_TODO: console.log(ADD_TODO);
        return {
            ...state,
            todos: [...state.todos, action.payload]
        };
        case DELETE_TODO: 
        const newTodos = state.todos.filter(todo => todo.id !== action.payload);
        return {
            ...state,
            todos: [...newTodos]
        };
        case GET_TODOS:
        return {
            ...state
        }
    default: return state;
    }
}

export default rootReducer;