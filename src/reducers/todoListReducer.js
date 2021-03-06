import { ADD_TODO, TOGGLE_TODO, UPDATE_TODO } from "../actions";

let nextId = 1;

const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: nextId++,
        done: false,
        text: action.payload
      };
      return [...state, newTodo];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload)
          return {
            ...todo,
            done: !todo.done
          };
        return todo;
      });
    case UPDATE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todoListReducer;
