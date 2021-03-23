import { ADD_TODO, DELETE_TODO, GET_TODOS } from "../constants/action-types";

export const addTodo = payload => {
    return { type: ADD_TODO, payload }
};

export const deleteTodo = payload => {
    return { type: DELETE_TODO, payload }
};

export const getTodos = () => {
    return { type: GET_TODOS }
};