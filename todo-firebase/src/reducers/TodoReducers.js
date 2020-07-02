import { ACTION_TYPES } from "../actions";

const initialState = [];

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_TODOS:
      return action.payload.todos;

    case ACTION_TYPES.ADD_TODO:
      return [...state, action.payload.todo];

    case ACTION_TYPES.TOGGLE_TODO:
      state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          todo.isDone = !todo.isDone;
        }
      });

      var updatedTodo = [...state];
      return updatedTodo;
    case ACTION_TYPES.REMOVE_TODO:
      var updatedTodo = state.filter(
        (todo) => todo.id !== action.payload.todoId
      );

      return updatedTodo;
    default:
      return state;
  }
};

export default todoReducers;
