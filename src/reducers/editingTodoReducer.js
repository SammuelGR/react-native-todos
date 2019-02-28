import {
  ADD_TODO,
  SET_EDITING_TODO,
  SET_TODO_TEXT,
  UPDATE_TODO
} from "../actions";

const INITIAL_STATE = {
  id: null,
  done: false,
  text: ""
};

const editingTodoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TODO_TEXT:
      return {
        ...state,
        text: action.payload
      };
    case ADD_TODO:
    case UPDATE_TODO:
      return INITIAL_STATE;
    case SET_EDITING_TODO:
      return action.payload;
    default:
      return state;
  }
};

export default editingTodoReducer;
