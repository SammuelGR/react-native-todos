export const ADD_TODO = "ADD_TODO";
export const addTodo = text => ({ payload: text, type: ADD_TODO });

export const TOGGLE_TODO = "TOGGLE_TODO";
export const toggleTodo = todoId => ({ payload: todoId, type: TOGGLE_TODO });
