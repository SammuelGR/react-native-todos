export const ADD_TODO = "ADD_TODO";
export const addTodo = text => ({ payload: text, type: ADD_TODO });

export const TOGGLE_TODO = "TOGGLE_TODO";
export const toggleTodo = todoId => ({ payload: todoId, type: TOGGLE_TODO });

export const SET_TODO_TEXT = "SET_TODO_TEXT";
export const setTodoText = text => ({ payload: text, type: SET_TODO_TEXT });

export const SET_EDITING_TODO = "SET_EDITING_TODO";
export const setEditingTodo = todo => ({
  payload: todo,
  type: SET_EDITING_TODO
});

export const UPDATE_TODO = "UPDATE_TODO";
export const updateTodo = todo => ({ payload: todo, type: UPDATE_TODO });
